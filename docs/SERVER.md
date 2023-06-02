### Routes overview



| Route                 | Verb   | Protected |
|-----------------------|--------|-----------|
| /authentication       | POST   | No        |
| /user                 | POST   | Yes       |
| /contact              | POST   | No        |
| /contacts             | GET    | Yes       |
| /articles             | GET    | Yes       |
| /article              | POST   | Yes       |
| /article/:key         | GET    | Yes       |
| /article/:id          | DELETE | Yes       |
| /article/:id          | PUT    | Yes       |


----

**[EN-US]**
# Routes
## User

### POST /user

Creates a new user.

**Parameters:**

- Request Body (JSON):
  - `nickname` (string): The username.
  - `email` (string): The user's email address.
  - `password` (string): The user's password.

**Responses:**

- 201 Created: User created successfully.
  - Response Body: A message indicating the success of the operation.
- 400 Bad Request: Request error.
  - Response Body: Error message indicating the problem.

### POST /authentication

Performs user authentication.

**Parameters:**

- Request Body (JSON):
  - `email` (string): The user's email address.
  - `password` (string): The user's password.

**Responses:**

- 200 OK: Authentication successful.
  - Response Body: A message indicating the success of the authentication.
- 400 Bad Request: Request error or incorrect password.
  - Response Body: Error message indicating the problem.
- 404 Not Found: User not found.
  - Response Body: Error message indicating that the user does not exist.

---

# Article

### `GET /articles`

Retrieves all articles.

**Parameters:**

- None.

**Responses:**

- `200 OK`: Successful request.
  - Response Body: An array of objects containing the articles.
- `404 Not Found`: No articles found.
  - Response Body: Message indicating that there are no available articles.

### `POST /article`

Creates a new article.

**Parameters:**

- Request Body (JSON):
  - `title` (string): The title of the article.
  - `author` (string): The author of the article.
  - `content` (string): The content of the article.

**Responses:**

- `201 Created`: Article created successfully.
  - Response Body: Message indicating that the article has been created.
- `400 Bad Request`: Request error.
  - Response Body: Error message indicating the problem.
- `409 Conflict`: The article already exists.
  - Response Body: Message indicating that the article already exists.

### `GET /article/:key`

Retrieves an article by ID or slug.

**Parameters:**

- `key` (string): The numerical ID or slug of the article.

**Responses:**

- `200 OK`: Successful request.
  - Response Body: Object containing the found article.
- `404 Not Found`: Article not found.
  - Response Body: Message indicating that the article was not found.

### `DELETE /article/:id`

Deletes an article by ID.

**Parameters:**

- `id` (string): The numerical ID of the article to be deleted.

**Responses:**

- `200 OK`: Article deleted successfully.
  - Response Body: Message indicating that the article has been deleted.
- `404 Not Found`: Article not found.
  - Response Body: Message indicating that the article was not found.

### `PUT /article/:id`

Updates an article by ID.

**Parameters:**

- `id` (string): The numerical ID of the article to be updated.
- Request Body (JSON):
  - `title` (string): The new title of the article.
  - `author` (string): The new author of the article.
  - `content` (string): The new content of the article.

**Responses:**

- `200 OK`: Article updated successfully.
  - Response Body: None.
- `400 Bad Request`: Request error.
  - Response Body: None.
- `404 Not Found`: Article not found.
  - Response Body: Message indicating that the article was not found.

## Contact


### Get All Contacts

Endpoint: `GET /contacts`

This endpoint retrieves all contacts.

#### Responses
| code | body |
|------|------|
| 200 | list of contacts|
| 404 | doesn't exists contacts|
| 400 | bad Request|

#### Request Example

```
GET /contacts
```

#### Response Example
```
[
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "subject": "Inquiry",
    "phone": "123456789",
    "message": "Lorem ipsum dolor sit amet",
    "createdAt": "2023-06-02T10:30:00Z"
  },
  {
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "subject": "Support",
    "phone": "987654321",
    "message": "Lorem ipsum dolor sit amet",
    "createdAt": "2023-06-02T11:45:00Z"
  }
]


```



### Register a New Contact
Endpoint: `POST /contact`

This endpoint allows registering a new contact.

#### Request Example
```
POST /contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "subject": "Inquiry",
  "phone": "123456789",
  "message": "Lorem ipsum dolor sit amet"
}

```

#### Response
```
{
  "contactId": 1
}
```


---
**[PT-BR]**
# Rotas 
## Usuário

### POST /user

Cria um novo usuário.

**Parâmetros:**

- Corpo da requisição (JSON):
  - `nickname` (string): O nome de usuário.
  - `email` (string): O endereço de e-mail do usuário.
  - `password` (string): A senha do usuário.

**Respostas:**

- 201 Created: Usuário criado com sucesso.
  - Corpo da resposta: Uma mensagem indicando o sucesso da operação.
- 400 Bad Request: Erro na requisição.
  - Corpo da resposta: Mensagem de erro indicando o problema.

### POST /authentication

Realiza a autenticação do usuário.

**Parâmetros:**

- Corpo da requisição (JSON):
  - `email` (string): O endereço de e-mail do usuário.
  - `password` (string): A senha do usuário.

**Respostas:**

- 200 OK: Autenticação bem-sucedida.
  - Corpo da resposta: Uma mensagem indicando o sucesso da autenticação.
- 400 Bad Request: Erro na requisição ou senha incorreta.
  - Corpo da resposta: Mensagem de erro indicando o problema.
- 404 Not Found: Usuário não encontrado.
  - Corpo da resposta: Mensagem de erro indicando que o usuário não existe.

---
# Artigo

### `GET /articles`

Recupera todos os artigos.

**Parâmetros:**

- Nenhum.

**Respostas:**

- `200 OK`: Requisição bem-sucedida.
  - Corpo da resposta: Uma matriz de objetos contendo os artigos.
- `404 Not Found`: Nenhum artigo encontrado.
  - Corpo da resposta: Mensagem indicando que não há artigos disponíveis.

### `POST /article`

Cria um novo artigo.

**Parâmetros:**

- Corpo da requisição (JSON):
  - `title` (string): O título do artigo.
  - `author` (string): O autor do artigo.
  - `content` (string): O conteúdo do artigo.

**Respostas:**

- `201 Created`: Artigo criado com sucesso.
  - Corpo da resposta: Mensagem indicando que o artigo foi criado.
- `400 Bad Request`: Erro na requisição.
  - Corpo da resposta: Mensagem de erro indicando o problema.
- `409 Conflict`: O artigo já existe.
  - Corpo da resposta: Mensagem indicando que o artigo já existe.

### `GET /article/:key`

Recupera um artigo pelo ID ou slug.

**Parâmetros:**

- `key` (string): O ID numérico ou o slug do artigo.

**Respostas:**

- `200 OK`: Requisição bem-sucedida.
  - Corpo da resposta: Objeto contendo o artigo encontrado.
- `404 Not Found`: Artigo não encontrado.
  - Corpo da resposta: Mensagem indicando que o artigo não foi encontrado.

### `DELETE /article/:id`

Exclui um artigo pelo ID.

**Parâmetros:**

- `id` (string): O ID numérico do artigo a ser excluído.

**Respostas:**

- `200 OK`: Artigo excluído com sucesso.
  - Corpo da resposta: Mensagem indicando que o artigo foi excluído.
- `404 Not Found`: Artigo não encontrado.
  - Corpo da resposta: Mensagem indicando que o artigo não foi encontrado.

### `PUT /article/:id`

Atualiza um artigo pelo ID.

**Parâmetros:**

- `id` (string): O ID numérico do artigo a ser atualizado.
- Corpo da requisição (JSON):
  - `title` (string): O novo título do artigo.
  - `author` (string): O novo autor do artigo.
  - `content` (string): O novo conteúdo do artigo.

**Respostas:**

- `200 OK`: Artigo atualizado com sucesso.
  - Corpo da resposta: Nenhum.
- `400 Bad Request`: Erro na requisição.
  - Corpo da resposta: Nenhum.
- `404 Not Found`: Artigo não encontrado.
  - Corpo da resposta: Mensagem indicando que o artigo não foi encontrado.



## Contato

### Obter todos os contatos

Endpoint: `GET /contatos`

Este endpoint recupera todos os contatos.

#### Respostas
| código | corpo |
|--------|-------|
| 200    | lista de contatos |
| 404    | contatos não existem |
| 400    | solicitação inválida |

#### Exemplo de requisição

```
GET /contatos
```


#### Exemplo de resposta

```
[
{
"nome": "Fulano de Tal",
"email": "fulano@example.com",
"assunto": "Consulta",
"telefone": "123456789",
"mensagem": "Lorem ipsum dolor sit amet",
"criadoEm": "2023-06-02T10:30:00Z"
},
{
"nome": "Beltrana Silva",
"email": "beltrana@example.com",
"assunto": "Suporte",
"telefone": "987654321",
"mensagem": "Lorem ipsum dolor sit amet",
"criadoEm": "2023-06-02T11:45:00Z"
}
]
```

### Registrar um novo contato
Endpoint: `POST /contato`

Este endpoint permite registrar um novo contato.

#### Exemplo de requisição
```
POST /contato



Content-Type: application/json

{
"nome": "Fulano de Tal",
"email": "fulano@example.com",
"assunto": "Consulta",
"telefone": "123456789",
"mensagem": "Lorem ipsum dolor sit amet"
}
```


#### Exemplo de response

```
{
"idContato": 1
}
```