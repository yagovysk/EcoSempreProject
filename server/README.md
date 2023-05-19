## Create User

Creates a new user.

### Method
- POST

### Route
- /user

### Request Parameters
| Name        | Type   | Description        |
|-------------|--------|------------------|
| nickname    | string | The user's nickname. |
| email       | string | The user's email. |
| password    | string | The user's password. |

### Responses
| Code | Description                 |
|--------|---------------------------|
| 201    | Success - The user was created successfully. |
| 400    | Error - There was a problem with the request. |

### Request Example
```
curl -X POST -H "Content-Type: application/json" -d '{
  "nickname": "john_doe",
  "email": "john@example.com",
  "password": "secret123"
}' http://api.example.com/user
```
### Success Example Response

```
HTTP/1.1 201 Created
Content-Type: text/plain

Created! {user_id}
```

### Error Example Response

```
HTTP/1.1 400 Bad Request
Content-Type: text/plain

{error_message}
```

```

## API Documentation

### User Routes

#### Create User

- URL: `/user`
- Method: POST
- Description: Creates a new user.
- Request Body:
  - Required Fields:
    - `username` (string): The username of the user.
    - `password` (string): The password of the user.
  - Example:
    ```json
    {
      "username": "john_doe",
      "password": "password123"
    }
    ```
- Response:
  - Status: 200 OK
  - Description: Returns the created user object.
  - Example:
    ```json
    {
      "id": "user_id",
      "username": "john_doe"
    }
    ```

#### User Authentication

- URL: `/authentication`
- Method: POST
- Description: Authenticates a user.
- Request Body:
  - Required Fields:
    - `username` (string): The username of the user.
    - `password` (string): The password of the user.
  - Example:
    ```json
    {
      "username": "john_doe",
      "password": "password123"
    }
    ```
- Response:
  - Status: 200 OK
  - Description: Returns an authentication token.
  - Example:
    ```json
    {
      "token": "authentication_token"
    }
    ```

## Article Routes

...

#### Get Article by ID

- URL: `/article/:id`
- Method: GET
- Description: Retrieves a specific article by its ID.
- Path Parameters:
  - `id` (string): The ID of the article.
- Response:
  - Status: 200 OK
  - Description: Returns the article object.
  - Example:
    ```json
    {
      "id": "article_id",
      "title": "Article Title",
      "author": "John Doe",
      "content": "Lorem ipsum dolor sit amet...",
      "createdAt": "2023-05-19T12:00:00Z",
      "updatedAt": "2023-05-19T14:30:00Z"
    }
    ```

#### Delete Article

- URL: `/article/:id`
- Method: DELETE
- Description: Deletes a specific article by its ID.
- Path Parameters:
  - `id` (string): The ID of the article.
- Response:
  - Status: 200 OK
  - Description: Returns a success message.
  - Example:
    ```
    Deleted
    ```

#### Update Article

- URL: `/article/:id`
- Method: PUT
- Description: Updates a specific article by its ID.
- Path Parameters:
  - `id` (string): The ID of the article.
- Request Body:
  - Optional Fields:
    - `title` (string): The updated title of the article.
    - `author` (string): The updated author of the article.
    - `content` (string): The updated content of the article.
  - Example:
    ```json
    {
      "title": "Updated Article",
      "author": "Jane Smith",
      "content": "Updated content"
    }
    ```
- Response:
  - Status: 200 OK
  - Description: Returns a success message.
  - Example:
    ```
    OK
    ```
