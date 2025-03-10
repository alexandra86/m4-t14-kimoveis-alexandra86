
# 🏁 Projeto Final: KImóveis - TypeORM com Relacionamentos

<h2 font-family="pattaya">Tecnologias utilizadas</h2>
<div style="display: inline_block"><br>
 <img align="center" alt="Alexandra-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
 <img align="center" alt="Alexandra-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
 <img align="center" alt="Alexandra-postgreSQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"> 
</div><br>

<h2 font-family="pattaya">Descrição</h2><br>
<p font-family="robotto" font-size="16px" line-height="34px" align="justify">
Projeto final do módulo 4, do curso de Desenvolvedora Web Full Stack, da Kenzie Academy Brasil. É uma API, responsável por gerenciar uma imobiliária utilizando TypeORM e tabelas relacionais. Utiliza Node, com Express e PostgreSQL, como banco de dados.
</p><br>

<h2 font-family="pattaya">Requisitos técnicos:</h2><br>

## Diagrama DER da API, referentes as tabelas usadas na aplicação e seus relacionamentos no banco de dados.

![DER](/KImóveis.png)

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm run i

# caso use yarn
yarn
```

## Instalação

Apenas as bibliotecas de teste, ou que os testes dependem, estão no **package.json**. Por isso, instale as dependências do projeto manualmente e não se esqueça de inicia-lo também.

```bash
# caso use npm
npm init -y

# caso use yarn
yarn init -y
```

## Dependências dos testes

Para que os testes funcionem corretamente, existem algumas dependências.

* O `app` tem que ser exportado como **default** em **src/app.ts**. Exemplo:

```ts
export default app
```

* O `AppDataSource` tem que ser exportado em **src/data-source.ts**. Exemplo:

```ts
export { AppDataSource }

// ou

export const AppDataSource = new DataSource(dataSourceConfig());
```

* As Entities **tem que ter os respectivos nomes** e **tem que ter a exportação centralizada** em **entities/index.ts**. Exemplo:

```ts
import { Address } from './<arquivo>';
import { Category } from './<arquivo>';
import { RealEstate } from './<arquivo>';
import { Schedule } from './<arquivo>';
import { User } from './<arquivo>';

export { Address, RealEstate, Category, User, Schedule };
```

## Sobre os testes

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/__tests__`.

Na subpasta `integration` estão os testes.

Já na subpasta `mocks` estão os dados que serão utilizados para os testes.

No arquivo `jest.config.ts` estão algumas configurações necessárias para os testes rodarem.

**`De modo algum altere qualquer um desses arquivos.`** Isso poderá comprometer a integridade dos testes.

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.

## Rodando os testes

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes

```bash
# caso use npm
npm run test

# caso use yarn
yarn test
```

### Rodar todos os testes e ter um log ainda mais completo

```bash
# caso use npm
npm run test --all

# caso use yarn
yarn test --all
```

### Rodar os testes de uma pasta específica

> detalhe: repare que tests está envolvido por 2 underlines. Isso se chama ***dunder***.

```bash
# caso use npm
npm run test <subpasta>

# caso use yarn
yarn test <subpasta>
```

### Rodar os testes de um arquivo específico

```bash
# caso use npm
npm run test <subpasta>/<arquivo>

# caso use yarn
yarn test <subpasta>/<arquivo>
```

**Caso você queira verificar todas as opções de execução de testes, visite a [Documentação oficial do Jest](https://jestjs.io/docs/cli)**

Após rodar um dos comandos aparecerá um log no seu terminal, contendo as informações da execução do teste.

**Observação:** O teste pode demorar alguns segundos para ser finalizado. Quanto maior for o teste, mais tempo será consumido para a execução.

### Agora que já sabe como iniciar o seu projeto e rodar os testes, é hora de colocar a mão no código
