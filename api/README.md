# Material de Apoio

## Descrição

Esta api tem a finalidade de disponibilizar de forma prática os dados necessários para a execução do teste.

## Requisitos

- NodeJS
- npm

## Instruções de inicio

Executar o comandos:
```
npm install
npm start
```

## Rotas

Ao executar o **npm start** as seguintes rotas estarão disponíveis no endereço **http://localhost:3000**

| Método | Endpoint      | Sessão                |
| :---   | :---          | ---:                  |
| GET    | /hero         | Hero (Caroussel)      |
| GET    | /articles     | Conteúdo mosaico      |
| POST   | /contacts     | Formulário de Contato |

As funções GET suportam query parameters como descrito abaixo:
```
http://localhost:3000/hero?_sort=content&_order=asc
```

A função POST de **/contacts** recebe apenas JSON dos seguintes parâmetros (name, email)