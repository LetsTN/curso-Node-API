<!-- PROJECT SHIELDS -->
[![Node Badge](https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=Node.js&logoColor=green)](https://nodejs.org/en/)
[![TypeScript Badge](https://img.shields.io/badge/-TypeScript-blue?style=flat-square&logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Jest Badge](https://img.shields.io/badge/-Jest-green?style=flat-square&logo=Jest&logoColor=white)](https://jestjs.io)
[![MongoDB Badge](https://img.shields.io/badge/-MongoDB-brightgreen?style=flat-square&logo=MongoDB&logoColor=white)](https://www.mongodb.com)
[![Github Actions Badge](https://img.shields.io/badge/-Github%20Actions-black?style=flat-square&logo=Github&logoColor=white)](https://github.com/features/actions)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Node.js API com Typescript</h3>

  <p align="center">
    Uma API para ver como está o tempo para surfar :ocean::surfer:
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Índice

* [Sobre o Projeto](#sobre-o-projeto)
* [Como rodar o projeto](#getting_started)
* [Uso](#uso)
* [Roadmap](#roadmap)
* [Contribua](#contribua)
* [Autores](#autores)


<!-- ABOUT THE PROJECT -->
## Sobre o Projeto
API desenvolvida durante o curso de Node.js do zero a produção, por Waldemar Neto Dev Lab (disponível em [link](https://www.nodejs-typescript-api.com/curso-gratis/)).

Durante o curso é criado uma API para calcular a melhor condição de surf entre varias praias, essa API tem como objetivo servir a aplicação web.

A aplicação web não é construida durante o curso pois ela não é o foco do conteúdo, mas ela é disponibilizada pronta (procure no [repositório do curso](https://github.com/waldemarnt/node-typescript-api) por web). No momento estou trabalhando em montar uma aplicação web em Angular para consumir esta API (para aprender Angular também :stuck_out_tongue_winking_eye:).

### As (principais) tecnologias usadas nesse projeto foram:
- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [MongoDB](https://www.mongodb.com)
- [Github Actions](https://github.com/features/actions)


## Como rodar o projeto? <a name = "getting_started"></a>
Essas instruções mostam como ter uma cópia do projeto instalada e funcionando em sua máquina local para fins de desenvolvimento e teste.


### Pré-requisitos
Antes de mais nada, você precisa ter instalado:

* [Node.js](https://nodejs.org/en/download/)

* npm
```sh
npm install npm@latest -g
```

* [MongoDB](https://balta.io/artigos/mongodb-docker) (usando o docker)
>Caso queira usar o ATLAS, vá em `config > default.json` e `config > test.json` e mude o `mongoUrl` para que você consiga se conectar ao seu cluster. ([Getting started com o Atlas](https://docs.atlas.mongodb.com/getting-started/))

* [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/)

### Instalação
Para instalar:

1. Clone o repositório
```sh
git clone https://github.com/LetsTN/curso-Node-API.git
```

2. Instale os pacotes
```sh
yarn install
```

## Uso
Para saber mais, rode sua aplicação usando 
```sh
yarn start:local
```

e vá até [http://localhost:3000/docs/](http://localhost:3000/docs/)


## Roadmap
Vá em [open issues](https://github.com/LetsTN/curso-Node-API/issues) para uma lista de funcionalidades futuras (and issues).


## Contribua
As contribuições são o que torna a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer serão **muito apreciadas**.

Caso queira contribuir, siga esses passos:

1. Dê um fork no projeto
2. Crie uma branch com sua contribuição (`git checkout -b feature/suaFeature`)
3. Dê um commit com suas mudanças (`git commit -m 'Adicionando suaFeature'`)
4. Dê um push para sua branch (`git push origin feature/suaFeature`)
5. Abra uma pull request

