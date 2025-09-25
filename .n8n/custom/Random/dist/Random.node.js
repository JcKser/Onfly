"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            icon: 'file:Random.svg',
            group: ['transform'],
            version: 1,
            description: 'Gera um número verdadeiramente aleatório usando a API do Random.org',
            defaults: {
                name: 'Random Number',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'True Random Number Generator',
                            value: 'generate',
                            description: 'Gera um número aleatório dentro de um intervalo',
                            action: 'Gera um número aleatório',
                        },
                    ],
                    default: 'generate',
                },
                {
                    displayName: 'Min',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    required: true,
                    displayOptions: {
                        show: {
                            operation: ['generate'],
                        },
                    },
                    description: 'O menor valor inteiro a ser retornado (inclusivo)',
                },
                {
                    displayName: 'Max',
                    name: 'max',
                    type: 'number',
                    default: 100,
                    required: true,
                    displayOptions: {
                        show: {
                            operation: ['generate'],
                        },
                    },
                    description: 'O maior valor inteiro a ser retornado (inclusivo)',
                },
            ],
        };
    }
    async execute() {
        var _a;
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            try {
                const min = this.getNodeParameter('min', i, 1);
                const max = this.getNodeParameter('max', i, 100);
                const apiUrl = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;
                const response = await this.helpers.httpRequest({
                    method: 'GET',
                    url: apiUrl,
                    json: false, // força resposta como string
                });
                const body = typeof response === 'string'
                    ? response
                    : ((_a = response.body) !== null && _a !== void 0 ? _a : JSON.stringify(response));
                const randomNumber = parseInt(body.trim(), 10);
                returnData.push({
                    json: {
                        randomNumber,
                        min,
                        max,
                    },
                    pairedItem: { item: i },
                });
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({
                        json: {
                            error: error.message,
                        },
                        pairedItem: { item: i },
                    });
                    continue;
                }
                throw error;
            }
        }
        return this.prepareOutputData(returnData);
    }
}
exports.Random = Random;
