*****Documentação Eco Sempre*****
# Visão geral

- [Visão geral das rotas](#visao-geral-das-rotas)
- [base url](#base-URL)

## Visão geral das rotas

### Autenticação

| Rota                 | Método   | Protegida |
|-----------------------|--------|-----------|
| /authentication       | POST   | Não        |

### Usuário

| Rota                 | Pétoodo   | Protegida |
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

## base URL

Todas as URLs incluídas nessa documentação exigem a `baseUrl`:

`localhost:8080/api/v1`
---
