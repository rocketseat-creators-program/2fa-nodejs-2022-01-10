## Implementando 2FA com QR Code em Node.js

<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

Cada vez mais vemos crimes cibernéticos e golpes acontecendo que roubam os dados das pessoas, por isso precisamos investir sempre mais na segurança das nossas aplicações. Uma forma de aumentar a segurança no login dos usuários das nossas ferramentas é implementando a autenticação em 2 etapas, ou abreviando, 2FA (Two Factor Authentication). Existem diferentes formas de se fazer isso, mas nesta aula geraremos um QR Code que pode ser usando com apps específicos, como Google Authenticator ou Authy.

Neste repositório está o código da aula sobre como implementar 2FA no Node.js. Na branch `main` você encontra o código inicial e na branch `complete` o código que teremos no final da aula.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/711732?s=460&u=6b1039f8a921c5733d92d13b2971c55157fee005&v=4" width="75px;"/>](https://github.com/askmon) |
| :-: |
|[André Spanguero Kanayama](https://github.com/askmon)|


### Requisitos

- Node.js v14 (`.nvmrc` incluso no projeto)
- Um banco PostgreSQL (existe um docker-compose no projeto, para quem quiser rodar usando Docker)

### Como rodar

0. Antes de tudo, rode o comando `npm install`;
0. Caso queira rodar o banco localmente com Docker, pode-se utilizar o comando `docker-compose up` para subir o banco;
0. Renomeie o arquivo `.env.example` para `.env` e edite as variáveis para conexão com o banco;
0. Rode o comando `npm run sequelize:migrate` para gerar as tabelas;
0. Rode o comando `npm run sequelize:seed` para criar dados de exemplo nas tabelas;
0. Rode o comando `npm run dev` para rodar o projeto usando nodemon.
