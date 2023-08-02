## Visão geral das rotas

### Autenticação

| Rota                 | Método   | Protegida |
|-----------------------|--------|-----------|
| /authentication       | POST   | Não        |

### Usuário

| Rota                 | Métoodo   | Protegida |
|-----------------------|--------|-----------|
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


[Documentação](https://github.com/YrllanBrandao/EcoSempreProject/blob/main/docs/api-doc.md)
