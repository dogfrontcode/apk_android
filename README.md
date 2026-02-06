# CDT Clone - React Native App

Este projeto é uma aplicação móvel desenvolvida em **React Native** com **Expo**, simulando a interface e funcionalidades da **Carteira Digital de Trânsito (CDT)**.

## 📱 Sobre o Aplicativo

O aplicativo replica o fluxo de autenticação e exibição de documentos da CDT. Ele utiliza uma estrutura moderna baseada em componentes e rotas.

### Como Funciona (Fluxo Principal)

1.  **Inicialização (`app/index.tsx`):**
    *   Ao abrir, o app verifica se existem dados de usuário salvos localmente (`storage`).
    *   **Se existir:** Redireciona automaticamente para o menu principal (`/app/menu`).
    *   **Se não existir:** Exibe a tela de entrada (`EntryScreen`).

2.  **Autenticação (`components/Templates/LoginWithGov`):**
    *   Simula o fluxo de login do **gov.br**.
    *   O usuário insere CPF e Senha.
    *   O app faz uma requisição POST para a API configurada (`/cnh/consultar/login`).
    *   Se o login for bem-sucedido, os dados da CNH retornados são salvos no dispositivo e o usuário acessa o app.

3.  **Estrutura de Pastas:**
    *   `app/`: Contém as rotas e telas (baseado no **Expo Router**). Cada arquivo aqui vira uma tela navegável.
    *   `components/`: Componentes visuais organizados em **Atomic Design** (Molecules, Organisms, Templates).
    *   `utils/`: Lógica de utilitários, como conexão com API (`api.ts`) e armazenamento local (`storage.ts`).
    *   `assets/`: Imagens e fontes.

## 🛠 Tecnologias Utilizadas

*   **React Native** & **Expo**: Framework principal de desenvolvimento.
*   **TypeScript**: Linguagem utilizada (JavaScript tipado).
*   **Expo Router**: Gerenciamento de navegação entre telas.
*   **Styled Components**: Para estilização dos componentes.
*   **Axios**: Para requisições HTTP (conexão com o servidor).

## 🚀 Como Rodar o Projeto

Como você prefere comandos simples, foi criado um arquivo `Makefile` na raiz. Você precisará ter o **Node.js** instalado no seu computador.

### Comandos Simplificados (Makefile)

Abra o terminal na pasta do projeto e use:

1.  **Instalar dependências (faça isso na primeira vez):**
    ```bash
    make setup
    ```

2.  **Rodar o aplicativo (Geral):**
    ```bash
    make start
    ```
    *Isso abrirá um menu onde você pode escolher rodar no Simulador iOS (pressione `i`) ou Android (pressione `a`).*

3.  **Rodar direto no Android:**
    ```bash
    make android
    ```

4.  **Rodar direto no iOS (apenas Mac):**
    ```bash
    make ios
    ```

5.  **Limpar o projeto (se der erro):**
    ```bash
    make clean
    ```

## 📝 Notas para Modificação

*   **API:** A URL da API está definida em `utils/api.ts`.
*   **Cores e Temas:** Verifique `constants/Colors.ts`.
*   **Telas:** Se quiser mudar o visual de uma tela específica, procure o arquivo correspondente dentro de `app/` ou o template em `components/Templates`.


## 🐍 Migração inicial para Python

Foi adicionada uma base de migração em `python_migration_flet/` com Flet, incluindo login, sessão, menu e telas iniciais.

Para executar:

```bash
cd python_migration_flet
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```
