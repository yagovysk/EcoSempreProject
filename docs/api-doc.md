*****Documentação Eco Sempre*****
# Visão geral

- [Visão geral das rotas](#visão-geral-das-rotas)
- [base url](#base-URL)
- [Authenticação](#autenticão)
  - [Criar usuário](#criar-usuário)
  - [Logar usuário](#logar-usuário)
 - [Categoria de pontos de coleta](#categoria-de-pontos-de-coleta)
    - [Criar categoria](#criar-categoria)
-  [Pontos de coleta](#pontos-de-coleta)
    - [Criar ponto de coleta](#criar-ponto-de-coleta)
    - [Obter pontos de coleta](#obter-pontos-de-coleta)
## Visão geral das rotas

### Autenticação

| Rota                 | Método   | Protegida |
|-----------------------|--------|-----------|
| /authentication       | POST   | Não        |
| /user                 | POST   | Sim       |

### Contatos

| Rota                 | Método   | Protegida |
|-----------------------|--------|-----------|
| /contact              | POST   | Não        |
| /contacts             | GET    | Sim       |

### artigos


| Rota                 | Método   | Protegida |
|-----------------------|--------|-----------|
| /articles             | GET    | Sim       |
| /article              | POST   | Sim       |
| /article/:key         | GET    | Sim       |
| /article/:id          | DELETE | Sim       |
| /article/:id          | PUT    | Sim       |

### Tags

| Rota                 | Método   | Protegida |
|-----------------------|--------|-----------|
| /tags| GET  | Sim   | 
| /tag | DELETE | Sim |
| /tag | POST | Sim |

### Newsletter

| Rota                 | Método   | Protegida |
|-----------------------|--------|-----------|
| /newsletter | GET  | Sim   | 
| /newsletter | DELETE | Sim |
| /newsletter | POST | Não |

## base URL

Todas as URLs incluídas nessa documentação exigem a `baseUrl`:

```
localhost:8080/api/v1
```
---

## Autenticação

### Criar usuário



```
POST {{baseUrl}}/user
```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| nickname | string | O username do usuário que você quer criar |
| email | string | Um email válido que será usado para o login e outras opções |
| password | string | é necessário um senha com no mínimo 8 caracteres|


### Logar usuário
Após a criação, a requisição deve ser feita para este endpoint para receber um token:


```
POST  {{baseUrl}}/authentication
```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| email | string | e-mail cadastrado |
| password | string | Senha que foi definida na criação do usuário |

<details>
  <summary>Exemplo de resposta</summary>
  
  ```
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoxLCJleHAiOjE2ODk0NTYyODMsImlhdCI6MTY4OTM2OTg4M30.otZ6_FeHuD0FuZplk4ND0IjZ97EjshGTHmat7XQ3J94"
  }
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  
Undefined binding(s) detected when compiling SELECT. Undefined column(s): [email
] query: select * from `users` where `email` = ?
  
  ```
</details>

## Categoria de pontos de coleta

### Criar categoria

```
POST {{baseUrl}}/category-collection-points
```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| name | string | nome da categoria |


<details>
  <summary>Exemplo de resposta</summary>
  
  ```
  Created
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```

  Conflict
  
  ```
</details>

## Pontos de coleta

### Criar ponto de coleta

```
POST {{baseUrl}}/collection-point
```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| name | string | nome do ponto |
| address | string | endereço completo do ponto de coleta |
| cep | string | cep contendo apenas números |
| category_id | number |id da categoria do ponto de coleta |
| state | string | nome do estado |
| size | string | tamanho do coletor ex: m, p e etc...|
<details>
  <summary>Exemplo de resposta</summary>
  
  ```
  Created
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```

  invalid
  
  ```
</details>

### Obter pontos de coleta

```
POST {{baseUrl}}/collection-points
```

<details>
  <summary>Exemplo de resposta</summary>
  
  ```
  [
    {
        "id": 1,
        "name": "any name",
        "address": "av: test any nº 200",
        "state": "brasilia",
        "cep": "00000000",
        "size": "M",
        "category_id": 1,
        "createdAt": "2023-07-16T15:59:29.000Z",
        "updatedAt": "2023-07-16T15:59:29.000Z"
    }
]
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Bad Request
  ```
</details>
