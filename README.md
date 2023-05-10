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
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "nickname": "john_doe",
  "email": "john@example.com",
  "password": "secret123"
}' http://api.example.com/user
```

### Success Response Example 

```HTTP/1.1 201 Created
Content-Type: text/plain

Created! {user_id}
```
### Error Response Example
```HTTP/1.1 400 Bad Request
Content-Type: text/plain

{error_message}
```





## Create Article

Creates a new article.

### Method
- POST

### Route
- /article

### Request Parameters
| Name        | Type   | Description        |
|-------------|--------|------------------|
| title       | string | The article's title. |
| author      | string | The article's author. |
| content     | string | The article's content. |

### Responses
| Code | Description                 |
|--------|---------------------------|
| 201    | Success - The article was created successfully. |
| 400    | Error - There was a problem with the request. |
| 409    | Conflict - The article already exists. |

### Request Example
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "Article Title",
  "author": "Author Name",
  "content": "Article Content"
}' http://api.example.com/article

```
## Success Response Example
```HTTP/1.1 201 Created
Content-Type: text/plain

Created Successfully!
```
## Error Response Example
```HTTP/1.1 400 Bad Request
Content-Type: text/plain

{error_message}
```
## Conflict Response Example
```HTTP/1.1 409 Conflict
Content-Type: text/plain

The article already exists!

