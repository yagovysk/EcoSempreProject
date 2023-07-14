*****Documentação Eco Sempre*****
# Visão geral

- [Visão geral das rotas](#visão-geral-das-rotas)
- [base url](#base-URL)

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


## Logar usuário
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
  {
Undefined binding(s) detected when compiling SELECT. Undefined column(s): [email
] query: select * from `users` where `email` = ?
  }
  ```
</details>


