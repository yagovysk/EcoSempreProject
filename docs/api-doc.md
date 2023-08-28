*****Documentação Eco Sempre*****
# Visão geral

- [Visão geral das rotas](#visão-geral-das-rotas)
- [base url](#base-URL)
- [Authenticação](#autenticão)
  - [Criar usuário](#criar-usuário)
  - [Logar usuário](#logar-usuário)
- [Artigo](#artigo)
   - [Registrar novo artigo](#registrar-novo-artigo)
   - [Obter todos os artigos registrados](#Obter-todos-os-artigos-registrados)
   - [Buscar artigos por tag](#obter-artigos-por-tag)
   - [Buscar artigo por slug ou id](#Buscar-artigo-por-slug-ou-id)
   - [Modificar artigo](#Modificar-artigo)
   - [Excluir um artigo](#Excluir-artigo)
- [Contato](#contato)
  - [Criar contato](#criar-contato)
  - [Obter contatos](#obter-contatos)
  - [Obter contato pelo id](#obter-contato-pelo-id)
  - [Deletar Contato](#deletar-contato)
- [Tag](#tag)
    - [Criar tag](#criar-tag)
    - [Obter tags](#obter-todas-as-tags)
    - [Deletar tag](#deletar-tag)
 - [Categoria de pontos de coleta](#categoria-de-pontos-de-coleta)
    - [Criar categoria](#criar-categoria)
-  [Pontos de coleta](#pontos-de-coleta)
    - [Criar ponto de coleta](#criar-ponto-de-coleta)
    - [Obter pontos de coleta](#obter-pontos-de-coleta)
- [Agendamento de coleta](#agendamento-de-coleta)
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

##### Status
| código | Descrição | 
|-|-|
| 201 | sucesso na criação do usuário |
| 400 | Ocorreu um erro na requisição |

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

##### Status
| código | Descrição | 
|-|-|
| 201 | sucesso na criação do usuário |
| 400 | Ocorreu um erro na requisição |


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


## Artigo

### Registrar novo artigo
⚠️ **autenticação exigida**
```
POST {{baseUrl}}/article
```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| title | string | título da postagem |
| author | string | nome do autor da publicação |
| content | string | todo o conteúdo do blog em texto limpo, incluindo tags html inseridas pelo editor de texto |
| author_id | number |id do author |
| tags_ids | array | os ids das tags |

##### Status
| código | Descrição | 
|-|-|
| 201 | Artigo criado com sucesso |
| 400 | Ocorreu um erro na requisição |
| 409 | O artigo já existe |

<details>
  <summary>Exemplo de resposta</summary>
  ```
  Created Successfully!
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  The article already exists!
  ```
</details>

### Obter todos os artigos registrados

###### Sem paginação

```
GET {{baseUrl}}/articles
```
###### Com paginação

```
GET {{baseUrl}}/articles?page=1&limit=1
```

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 404 | Não existem artigos cadastrados |

<details>
  <summary>Exemplo de resposta</summary>
  ```
  [
    {
        "id": 1,
        "title": "5 things that  you could make in 2023",
        "author": "ecosempre",
        "content": "first1 second third fourth fifth",
        "author_id": 1,
        "slug": "5-things-that-you-could-make-in-2023",
        "createdAt": "2023-05-31T16:54:25.000Z",
        "updatedAt": "2023-05-31T16:54:25.000Z"
    },
    {
        "id": 2,
        "title": "Como criar um server express2",
        "author": "Ecosempre",
        "content": "This is only a test",
        "author_id": 1,
        "slug": "Como-criar-um-server-express2",
        "createdAt": "2023-05-31T17:06:19.000Z",
        "updatedAt": "2023-05-31T17:06:19.000Z"
    }
    ]
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Not Found
  ```
</details>

### Obter artigos por tag


```
GET {{baseUrl}}/[[tagName]]
```

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 404 | Não existem artigos cadastrados |

<details>
  <summary>Exemplo de resposta</summary>
  ```
[
	{
		"id": 1,
		"title": "any",
		"author": "Eco Sempre",
		"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		"author_id": 1,
		"slug": "novo-titulo1",
		"createdAt": "2023-06-26T20:40:44.000Z",
		"updatedAt": "2023-06-26T20:40:44.000Z",
		"article_id": 58,
		"tag_id": 1,
		"name": "ecologia"
	}
]
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Not Found
  ```
</details>

### Buscar artigo por slug  ou id

```
GET  {{baseUrl}}/article/[slug]
```

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 404 | Não existem artigos cadastrados |

<details>
  <summary>Exemplo de resposta</summary>
  ```
  {
    "id": 2,
    "title": "Como criar um server express2",
    "author": "Ecosempre",
    "content": "this is only a test",
    "author_id": 1,
    "slug": "Como-criar-um-server-express2",
    "createdAt": "2023-05-31T17:06:19.000Z",
    "updatedAt": "2023-05-31T17:06:19.000Z"
}
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Not Found
  ```
</details>

### Modificar artigo
⚠️ **autenticação exigida**
```
PUT {{baseUrl}}/article/[articleId]
```

##### Corpo da requisição(exemplo)

|  parâmetro | novo valor | descrição |
|-|-|-|
| title | other title | o novo título de um artigo |
| content | other content | novo conteúdo com mudanças |

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 404 | Não existem artigos cadastrados |

<details>
  <summary>Exemplo de resposta</summary>
  ```
 OK
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Bad Request
  ```
</details>

### Excluir artigo
⚠️ **autenticação exigida**
```
DELETE {{baseUrl}}/article/[articleId]
```

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 404 | Não existem artigos cadastrados |

<details>
  <summary>Exemplo de resposta</summary>
  ```
  Deleted
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Bad Request
  ```
</details>

## Contato

### Criar contato

```
POST {{baeUrl}}/contact
```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| name | string | nome da pessoa ou empresa |
| email | string | email para contato |
| subject | string | assunto do contato |
| phone | string | número de telefone para contato |

##### Status
| código | Descrição | 
|-|-|
| 201 | Sucesso |
| 400 | Erro na requisição |

<details>
  <summary>Exemplo de resposta</summary>
  ```
  [
    49
]
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Bad Request
  ```
</details>

### Obter contatos
⚠️ **autenticação exigida**
```
POST {{baeUrl}}/contacts
```


##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Erro na requisição |
| 404| Não existem contatos |
<details>
  <summary>Exemplo de resposta</summary>
  ```
  [
    {
        "id": 4,
        "name": "any",
        "email": "any@tipes.com",
        "subject": "anyway",
        "phone": " 40028922",
        "message": "anything",
        "createdAt": "2023-06-05T15:23:05.000Z"
    },
    {
        "id": 5,
        "name": "any",
        "email": "jacuraru@tipes.com",
        "subject": "any",
        "phone": " 40028922",
        "message": "anything",
        "createdAt": "2023-06-05T15:23:07.000Z"
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

### Obter contato pelo ID
⚠️ **autenticação exigida**
```
POST {{baeUrl}}/contact/[id]
```


##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Erro na requisição |
| 404| Não existem contatos |

<details>
  <summary>Exemplo de resposta</summary>
  ```
 {
    "id": 4,
    "name": "any",
    "email": "any@tipes.com",
    "subject": "anyway",
    "phone": " 40028922",
    "message": "anything",
    "createdAt": "2023-06-05T15:23:05.000Z"
}
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Bad Request
  ```
</details>

### Deletar contato
⚠️ **autenticação exigida**
```
POST {{baeUrl}}/contact/[id]
```


##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Erro na requisição |
| 404| Não existem contatos |

<details>
  <summary>Exemplo de resposta</summary>
  ```
OK
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Not Found
  ```
</details>

## Tag

### Criar tag
⚠️ **autenticação exigida**
```
POST {{baseUrl}}/tag
```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| name | string | nome da tag |

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 409 | conflito |

<details>
  <summary>Exemplo de resposta</summary>
  ```
  1
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Conflict
  ```
</details>

### Obter todas as tags

###### Sem paginação

```
GET {{baseUrl}}/tags
```

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 404 | Não existem tags registradas|

<details>
  <summary>Exemplo de resposta</summary>
  ```
  [
    {
        "id": 1,
        "name": "ecologia",
        "createdAt": "2023-06-26T20:40:44.000Z",
        "updatedAt": "2023-06-26T20:40:44.000Z"
    },
    {
        "id": 3,
        "name": "lixo eletronico",
        "createdAt": "2023-07-14T19:39:56.000Z",
        "updatedAt": "2023-07-14T19:39:56.000Z"
    },
    {
        "id": 4,
        "name": "outra tag",
        "createdAt": "2023-08-01T12:15:32.000Z",
        "updatedAt": "2023-08-01T12:15:32.000Z"
    }
]
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Not Found
  ```
</details>

### Deletar tag
⚠️ **autenticação exigida**
```
DELETE {{baseUrl}}/tag
```

##### Corpo da requisição

| parâmetro | tipo | descrição |
|-|-|-|
| tag_id | number | id da tag que será exluída |

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 404 | A tag não existe |

<details>
  <summary>Exemplo de resposta</summary>
  ```
OK
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Not Found
  ```
</details>

## Categoria de pontos de coleta

### Criar categoria
⚠️ **autenticação exigida**
```
POST {{baseUrl}}/category-collection-points
```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| name | string | nome da categoria |

##### Status
| código | Descrição | 
|-|-|
| 201 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 409 | conflito |

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
⚠️ **autenticação exigida**
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

##### Status
| código | Descrição | 
|-|-|
| 201 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 409 | conflito |


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
##### Status
| código | Descrição | 
|-|-|
| 201 | Sucesso |
| 400 | Ocorreu um erro na requisição |
| 404 | Não existem pontos de coleta registrados |

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

## Agendamento de coleta

### Criar agendamento

```POST {{baseUrl}}/schedule-pickup```

##### Corpo da requisição

| parâmetro | tipo | Descrição |
|-|-|-|
| name | string | nome da empresa ou pessoa |
| email | string | endereço de e-mail do solicitante|
| phone | string | número de telefone |
| cep | string | código postal |
| state | string | nome do estado |
| city | string | nome da cidade |
| materials| string | descrição dos materiais e quantidade |
| attachments | file | imagens anexadas(máximo 3) |

##### Status
| código | Descrição | 
|-|-|
| 200 | Sucesso |
| 400 | Ocorreu um erro na requisição |

<details>
  <summary>Exemplo de resposta</summary>
  
  ```
ok
  ```
</details>

<details>
  <summary>Exemplo de resposta com erro</summary>
  
  ```
  Bad Request
  ```
</details>
