# 🎲 Onfly - n8n Custom Connector

Conector customizado para o **n8n**, chamado **Random**, que gera números verdadeiramente aleatórios usando a [API do Random.org](https://www.random.org/).

---

## 📋 Pré-requisitos
- Node.js **22 (LTS)**
- TypeScript
- Docker + Docker Compose

---

## 🚀 Subindo a infra do n8n
Suba o ambiente com Postgres e n8n via Docker Compose:

```bash
docker compose up -d
O n8n ficará disponível em:
👉 http://localhost:5678

🛠️ Instalando e compilando o conector
Acesse a pasta do conector:

bash
Copiar código
cd .n8n/custom/Random
Instale as dependências:

bash
Copiar código
npm install
Compile o projeto (gera a pasta dist/ e copia o SVG):

bash
Copiar código
npm run build
Estrutura final esperada:

mathematica
Copiar código
.n8n/custom/Random/
  ├── dist/
  │   ├── Random.node.js
  │   ├── Random.node.d.ts
  │   └── Random.svg
  ├── Random.node.ts
  ├── Random.svg
  ├── package.json
  ├── tsconfig.json
🧩 Como usar o conector no n8n
No editor do n8n, clique em Add Node (+).

Busque por Random Number.

Configure os parâmetros:

Min → valor mínimo (inclusivo)

Max → valor máximo (inclusivo)

Clique em Test step.

Veja o número aleatório no output. 🎉

✅ Requisitos atendidos
Nome do conector: Random

Operação: True Random Number Generator

Inputs: Min e Max

Integração com Random.org

Ícone SVG customizado

Docker Compose com Postgres

Documentação de setup e uso

✨ Autor
Desenvolvido por Júlio César