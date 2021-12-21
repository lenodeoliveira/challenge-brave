# Desafio Brave Ag - Back-end :rocket:

Desafio realizado utilizando as seguintes tecnologias: 
* Node.JS; 
* Sequelize; 
* Express; 
* Postgres;
* Sinon.JS;
* Chai;
* Sequelize-test-helpers.

### Criar o banco
`npx sequelize db:create`

### execute as migrations
`npx sequelize db:migrate`

### popular as tabelas
`npx sequelize db:seed:all`


### rodar o servidor
`npm start`

### Rodar os tests 
`npm test`


## Rotas:
## `/articles`
| método   |     endpoint  | status code
|----------|:-------------:|-----------:
| GET      | /articles     | 200

#### Response

```
{
  "count": 1,
  "rows": [
  {
   "id": 1,
   "title": "title",
   "content": "content",
   "url": "big",
   "big": "hot",
   "hot": "uploads/1640106327646.png",
   "createdAt": "2021-12-21T17:05:27.651Z",
   "updatedAt": "2021-12-21T17:05:27.651Z"
   },
  ]
}
```
<hr/>

| método   |     endpoint  | status code
|----------|---------------|-----
| GET      | /articles/:id | 200


#### Response

```
{
   "id": 1,
   "title": "title",
   "content": "content",
   "url": "big",
   "big": "hot",
   "hot": "uploads/1640106327646.png",
   "createdAt": "2021-12-21T17:05:27.651Z",
   "updatedAt": "2021-12-21T17:05:27.651Z"
}
```
<hr/>

| Method   |     endpoint  | status code
|----------|---------------|-----
| POST     | /articles     | 204


#### Parameters

| Property   |   Description      | type
|------------|--------------------|-----
| title      | article title      | String
| content    | Article content    | String
| url        | url image          | String
| big        | big description    | String
| hot        | hot description    | String


<hr/>

| Method   |     endpoint  | status code
|----------|---------------|-----
| PUT      | /articles/:id | 204


#### Parameters

| Property   |   Description      | type
|------------|--------------------|-----
| title      | article title      | String
| content    | Article content.   | String
| url        | url image          | String
| big        | big description    | String
| hot        | hot description    | String


<hr/>

| Method   |   endpoint    | status code
|----------|---------------|-----
| DELETE   | /articles/:id | 204

#### Response
The request has no body response.


<hr/>

## `/hero`

| Method   |   endpoint    | status code
|----------|---------------|-----
| GET      | /hero         | 200

#### Response
```
{
 "count": 1,
 "rows": [
 {
  "id": 1,
  "content": "content test",
  "createdAt": "2021-12-19T23:13:34.008Z",
  "updatedAt": "2021-12-21T14:26:34.279Z"
  },
 ]
}
```

<hr/>

| Method   |   endpoint    | status code
|----------|---------------|-----
| GET      | /hero/:id     | 200

#### Response

```
{
 	"id": 1,
	"content": "content test",
	"createdAt": "2021-12-19T23:13:34.008Z",
	"updatedAt": "2021-12-21T14:26:34.279Z"
}
```

<hr/>

| Method   |   endpoint    | status code
|----------|---------------|-----
| POST     | /hero         | 201


#### Parameters

| Property   |   Description      | type
|------------|--------------------|-------
| content    | hero content       | String


<hr/>

| Method   |   endpoint    | status code
|----------|---------------|-----
| PUT      | /hero/:id     | 204

#### Parameters

| Property   |   Description      | type
|------------|--------------------|-------
| content    | hero content       | String



<hr/>


| Method   |   endpoint    | status code
|----------|---------------|-----
| DELETE   | /hero/:id     | 204

#### Response
The request has no body response.


<hr/>

## `/contacts`

| Method   |   endpoint    | status code
|----------|---------------|-----
| GET      | /contacts     | 200

### Response 
```
{
"count": 1,
"rows": [
  {
	"id": 2,
	"name": "Placehold 01",
	"email": "email@email.com",
	"createdAt": "2021-12-19T01:04:51.949Z",
	"updatedAt": "2021-12-19T01:04:51.949Z"
 },
]
}
```


<hr/>

| Method   |   endpoint    | status code
|----------|---------------|-----
| GET      | /contacts/:id | 200


### Response

```
{
 "id": 2,
 "name": "Placehold 02",
 "email": "email@email.com",
 "createdAt": "2021-12-19T01:04:51.949Z",
 "updatedAt": "2021-12-19T01:04:51.949Z"
}
```

<hr/>

| Method   |   endpoint    | status code
|----------|---------------|-----
| POST     | /contacts     | 201

#### Parameters

| Property   |   Description      | type
|------------|--------------------|-------
| name       | name contact       | String
| email      | email contact      | String

<hr/>

| Method   |   endpoint    | status code
|----------|---------------|-----
| PUT      | /contacts/:id | 204

#### Parameters

| Property   |   Description      | type
|------------|--------------------|-------
| name       | name contact       | String
| email      | email contact      | String

<hr/>


| Method   |   endpoint    | status code
|----------|---------------|-----
| DELETE   | /contacts/:id | 204


#### Response
The request has no body response.

<hr/>

Ficaria extremamente feliz em receber algum feedback :smiley: <br>
**Contato**
<br>
<br>
<a href="https://www.linkedin.com/in/johnlennondeoliveira/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="https://www.linkedin.com/in/johnlennondeoliveira/" height="50" width="50" /></a>

