# Instalation Guide

# Avisos

> [!IMPORTANT]  
> Por favor, Não fazer commit direto na branch main.
> Abaixo terá um padrão de commits semânticos para melhor identificação do que foi realizado.

## Pré-requisitos

Antes de começar, certifique de ter o node.jS e o npm (Node Pack Manager) em seu Sistema Operacional. você pode instalar [Site Oficial](https://nodejs.org/).

## Passos de Instalação: 

1. **Clone o repositorio:** https://github.com/BrenoJLeal02/frontendtransaction.git

2. **Instalar as depêndencias:**

```bash
 npm install
```

3. **Inicie o servidor de desenvolvimento**:

```bash
npm run dev
```

este comando irá iniciar o servidor de desenvolvimento local usando o Vite. Agora você pode acessar seu aplicativo em `http://localhost:5173/`

```bash
  VITE v5.4.1  ready in 1215 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Padrão de commits a serem seguidos

Evitem fazer commits de muitas linhas, as vezes menos é mais. Também sigam esses padrões de descrição de commits para facilitar a leitura de todos em relação às mudanças feitas

- **Feat:** Adição de uma nova funcionalidade.
  - **Exemplo**
    ```bash
        git commit -m "Feat: Creating login page"
    ```
- **Fix:** Correção de lógica de alguma funcionalidade, testes e similares.
  - **Exemplo:**
    ```bash
         git commit -m "Fix: Fixing login authorization"
    ```
- **Refactor:** Refatoração e/ou otmização do código, corrigir identação etc.
  - **Exemplo:**
    ```bash
         git commit -m "Refactor: Refactor API archive"
    ```
- **Style:** Adição e modificação de estilização(APENAS ESTILIZAÇÃO).
  - **Exemplo:**
    ```bash
         git commit -m "Style: Add Navbar color"
         git commit -m "Style: Change Navabar Color"
    ```
- **Chore:** Commits do tipo chore indicam atualizações de tarefas de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código).

  - **Exemplo:**

    ```bash
         git commit -m "Chore: Configure vercel.json File"

    ```

- **Docs:** Adição de documentação no projeto
  - **Exemplo:**
    ```bash
         git commit -m "Docs: add documentation"
    ```

## Pull Requests

Ao fazer um pull request, verifique se há conflitos. **Pull request com conflitos não serão aceitos.**

Caso hajam conflitos, pesquisem sobre resolução de conflitos e pull request em projetos open source.

## Branches

- **main:** -> Branch Principal.
## Criem suas próprias branches baseadas na main de preferência
**Exemplo:**
- **anaclara** -> Branch de desenvolvimento de Ana Clara.
- **breno** -> Branch de desenvolvimento de Breno.
- **gabriel** -> Branch de desenvolvimento de Gabriel.
- **kenji** -> Branch de desenvolvimento de Kenji.
- **hallan** -> Branch de desenvolvimento de Hallan.

**Para acessar as e navegar entre as branches:**

```bash
git checkout nome_da_branch -> para trocar de branch.
git checkout -b nome_da_branch  -> criação de uma nova branch.
```

## Scripts Disponíveis

- **dev:** Inicia o servidor de desenvolvimento.
- **build:** Gera uma versão de produção otimizada do seu aplicativo.
- **lint:** Executa o ESLint para verificar e corrigir problemas de estilo de código.
- **preview:** Inicia um servidor para visualizar a versão de produção antes de implantar.
