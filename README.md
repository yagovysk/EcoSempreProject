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
