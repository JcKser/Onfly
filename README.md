# 🎲 Onfly - n8n Custom Connector: Random

Conector customizado para o **n8n**, chamado **Random**, que gera números verdadeiramente aleatórios usando a [API pública do Random.org](https://www.random.org/).

---

## 📚 Índice

- [Pré-requisitos](#-pré-requisitos)
- [Subindo a infra do n8n](#-subindo-a-infra-do-n8n)
- [Instalando e compilando o conector](#️-instalando-e-compilando-o-conector)
- [Como usar](#-como-usar-o-conector-no-n8n)
- [Funcionalidades](#-requisitos-atendidos)
- [Autor](#-autor)

---

## 📋 Pré-requisitos

Para utilizar este conector, você precisará de:
-   Node.js **v22 (LTS)**
-   TypeScript
-   Docker e Docker Compose

---

## 🚀 Subindo a infra do n8n

O projeto inclui um `docker-compose.yml` para subir um ambiente n8n com um banco de dados Postgres de forma rápida.

1.  Execute o comando na raiz do projeto:
    ```bash
    docker compose up -d
    ```

2.  Após a conclusão, o n8n estará disponível no seu navegador em:
    👉 [http://localhost:5678](http://localhost:5678)

---

## 🛠️ Instalando e compilando o conector

Siga os passos abaixo para instalar e compilar o conector customizado.

1.  **Acesse a pasta do conector:**
    ```bash
    cd .n8n/custom/Random
    ```

2.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    ```

3.  **Compile o projeto TypeScript:**
    *Este comando transpila o código para JavaScript (`.js`), gera os tipos (`.d.ts`) e copia os arquivos compilados junto com o ícone para a pasta `dist/`.*
    ```bash
    npm run build
    ```

4.  **Estrutura de arquivos final:**
    Após a compilação, a estrutura de pastas do conector deve ser a seguinte:
    ```text
    .n8n/custom/Random/
    ├── dist/
    │   ├── Random.node.js
    │   ├── Random.node.d.ts
    │   └── Random.svg
    ├── Random.node.ts
    ├── Random.svg
    ├── package.json
    └── tsconfig.json
    ```
5.  **Reinicie o container do n8n** para que ele reconheça o novo conector.
    ```bash
    docker compose restart n8n
    ```

---

## 🧩 Como usar o conector no n8n

Com o conector instalado e o n8n rodando, você pode adicioná-lo ao seu workflow.

1.  No editor de workflows do n8n, clique no botão **+** para adicionar um novo nó.
2.  Na barra de busca, procure por "**Random Number**".
3.  Arraste o nó para a sua área de trabalho.
4.  Configure os parâmetros no painel lateral:
    -   `Min` → O valor mínimo para o número aleatório (inclusivo).
    -   `Max` → O valor máximo para o número aleatório (inclusivo).
5.  Clique em **Test step** para executar o nó.
6.  O número aleatório gerado aparecerá no painel de **Output**. 🎉

---
## 🔐 Variáveis de ambiente

As seguintes variáveis de ambiente são usadas pelo `docker-compose.yml` para configurar o n8n com Postgres e carregar o conector customizado:

- **POSTGRES_USER** → usuário do banco (padrão: `n8n`)  
- **POSTGRES_PASSWORD** → senha do banco (padrão: `n8n`)  
- **POSTGRES_DB** → nome do banco (padrão: `n8n`)  
- **DB_TYPE** → tipo de banco usado pelo n8n (`postgresdb`)  
- **DB_POSTGRESDB_HOST** → host do Postgres (`postgres`)  
- **DB_POSTGRESDB_PORT** → porta do Postgres (`5432`)  
- **DB_POSTGRESDB_DATABASE** → nome do banco usado pelo n8n (padrão: `n8n`)  
- **DB_POSTGRESDB_USER** → usuário usado pelo n8n (padrão: `n8n`)  
- **DB_POSTGRESDB_PASSWORD** → senha usada pelo n8n (padrão: `n8n`)  
- **N8N_CUSTOM_EXTENSIONS** → caminho da pasta de conectores customizados (`/home/node/.n8n/custom`)



## ✅ Requisitos atendidos

-   **Nome do conector:** `Random`
-   **Operação:** *True Random Number Generator*
-   **Inputs:** `Min` e `Max` para definir o intervalo.
-   **Integração:** Conecta-se à API do **Random.org**.
-   **Visual:** Ícone SVG customizado para fácil identificação.
-   **Infraestrutura:** `docker-compose.yml` com Postgres pré-configurado.
-   **Documentação:** Guia completo de setup e uso.

---

## ✨ Autor

Desenvolvido por **Júlio César**.