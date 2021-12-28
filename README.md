<div align="center">
  <img src="https://img.shields.io/static/v1?label=Next&message=12.0.7&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Version of the react" />

  <img src="https://img.shields.io/static/v1?label=React&message=17.0.2&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=TypeScript&message=4.5.4&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=Styled Components&message=5.3.3&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=Plop&message=3.0.5&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=Jest&message=27.4.5&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=Husky&message=7.0.4&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />
</div>

<div align="center">
  <img align="center" src="/public/iclodus.svg" alt="logo iClouds Sistemas Web" />
</div>

<h1 align="center">Next.js Boilerplate iClouds</h1>

<p align="center">
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#arquitetura">Arquitetura</a> •
 <a href="#como-usar">Como usar</a>
</p>

<h4 align="center">
	 Status: Em andamento!
</h4>

---

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

#### Auxiliares
- [Jest](https://jestjs.io/)
- [Plop](https://plopjs.com/)
- [Styled Components](https://styled-components.com/)

#### Padronização de código/commits:
- [Husky](https://typicode.github.io/husky/#/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

### Arquitetura
```shell
src/
|-- components/   # Contém os components reutilizáveis do projeto.
|--- buttons/     # Contém os botões do projeto.
|--- cards/       # Contém os cards do projeto.
|--- inputs/      # Contém os inputs do projeto.
|--- sections/    # Contém todas as sections do projeto.
|---- home/       # Contém as seções da home.
|--- SEO/         # Contém o SEO do projeto.
|-- functions/    # Funções globais, que podem ser reutilizadas.
|-- hooks/        # Contém todos os hooks do projeto.
|-- pages/        # Todas as páginas do projeto estão dentro dessa pasta.
|-- services/     # Contém as configurações das APIs.
|-- styles/       # Contém todos os arquivos relacionados a padronização de estilos do projeto.
|-- types/        # Contém a tipagem dos components do projeto.
```

---

### Como usar
#### Pré-requisitos

Antes de começar, precisa-se ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/package/npm).

##### Usando o template:

Clique no botão <b>Use this template</b>
Adicione o <i>nome do novo projeto</i>, a <i>descrição</i> e clique em <b>Create repository from template</b>.

##### Clone o repositório:

```
  yarn create next-app -e https://github.com/iClouds-Sistemas-Web/boilerplate
```
##### Acesse a pasta do projeto no terminal/cmd:
```bash
cd repository-name
```
##### Instale as dependências com yarn ou npm:
```bash
yarn
# ou npm install
```
##### Execute a aplicação em modo de desenvolvimento:
```bash
yarn dev
```
#### O servidor inciará na porta :3000 - acesse <http://localhost:3000>

---
