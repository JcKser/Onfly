declare module 'n8n-workflow' {
  export interface IExecuteFunctions {
    getInputData(): any[];
    getNodeParameter(name: string, index: number, defaultValue?: any): any;
    helpers: {
      httpRequest(options: any): Promise<any>;
    };
    prepareOutputData(data: any[]): any[][];
    continueOnFail(): boolean;
  }

  export interface INodeExecutionData {
    json: any;
    pairedItem?: { item: number };
  }

  export interface INodeTypeDescription {
    displayName: string;
    name: string;
    icon: string;
    group: string[];
    version: number;
    description: string;
    defaults: { name: string };
    inputs: string[];
    outputs: string[];
    properties: any[];
  }

  export interface INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
  }
}
