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

## Get Articles

Retrieves a list of articles.

### Method
- GET

### Route
- /articles

### Query Parameters
| Name  | Type   | Description                           |
|-------|--------|-------------------------------------|
| limit | string | (Optional) The maximum number of articles to retrieve. |
| page  | string | (Optional) The page number for pagination. |

### Responses
| Code | Description                 |
|--------|---------------------------|
| 200    | Success - Articles retrieved successfully. |
| 400    | Error - There was a problem with the request. |
| 404    | Not Found - There are no articles available. |

### Request Example
```
curl -X GET http://api.example.com/articles?limit=5&page=1
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
| author_id   | number | The ID of the article's author. |

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
  "content": "Article Content",
  "author_id": 123
}' http://api.example.com/article

```

### Success Request Example
```
HTTP/1.1 201 Created
Content-Type: text/plain

Created Successfully!

```

### Error Request Example
```
HTTP/1.1 400 Bad Request
Content-Type: text/plain

{error_message}

```

### Conflict Request Example
```
HTTP/1.1 409 Conflict
Content-Type: text/plain

The article already exists!

```



## Delete Article

Deletes an article.

### Method
- DELETE

### Route
- /article/:id

### Path Parameters
| Name  | Type   | Description        |
|-------|--------|------------------|
| id    | number | The ID of the article to delete. |

### Responses
| Code | Description                 |
|--------|---------------------------|
| 200    | Success - The article was deleted successfully. |
| 400    | Error - There was a problem with the request. |
| 404    | Not Found - The article does not exist. |

### Request Example
```
curl -X DELETE http://api.example.com/articles/{article_id}
```

### Success Request Example
```
HTTP/1.1 200 OK
Content-Type: text/plain

Deleted

```
### Error Request Example
```
HTTP/1.1 400 Bad Request
Content-Type: text/plain

{error_message}

```
### Not Found Request Example
```
HTTP/1.1 404 Not Found
Content-Type: text/plain

The article doesn't exist!

```

