# Mony App Backend Architecture

## Database Schema

### User

- id (PK)
- email
- password
- username
- created_at, updated_at

### Account

- id (PK)
- user_id (FK)
- name, type
- currency, balance
- created_at, updated_at

### Transaction

- id (PK)
- account_id (FK)
- created_by (FK)
- category_id (FK)
- amount, type, date

### Category

- id (PK)
- name, icon
- type, color
- user_id (FK)
- account_id (FK)

### TransactionSplit

- id (PK)
- transaction_id (FK)
- user_id (FK)
- amount, status

### Budget

- id (PK)
- account_id (FK)
- category_id (FK)
- amount, period

## API Endpoints

### Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Accounts

- `GET /api/accounts`
- `POST /api/accounts`
- `GET/PATCH/DELETE /api/accounts/:id`
- `GET/POST /api/accounts/:id/members`

### Transactions

- `GET/POST /api/accounts/:id/transactions`
- `GET/PATCH/DELETE /api/accounts/:id/transactions/:txId`
- `POST /api/transactions/:id/splits`
- `POST /api/transactions/:id/attachments`

### Analytics

- `GET /api/accounts/:id/analytics/summary`
- `GET /api/accounts/:id/analytics/by-category`
- `GET /api/accounts/:id/analytics/trends`

## NestJS Directory Structure

```
src/
├── main.ts, app.module.ts
├── modules/
    ├── auth/ (auth.module.ts, auth.controller.ts, auth.service.ts)
    ├── users/ (users.module.ts, users.controller.ts, users.service.ts)
    ├── accounts/ (accounts.module.ts, accounts.controller.ts, accounts.service.ts)
    └── transactions, categories, budgets, analytics, storage modules...
```

## Entity Relationships

The database schema includes the following key relationships:

- User to Account: One-to-many
- Account to Transaction: One-to-many
- Transaction to Category: Many-to-one
- Transaction to TransactionSplit: One-to-many
- Account to Budget: One-to-many
- Budget to Category: Many-to-one

## Technical Stack

The backend architecture is built using NestJS, a progressive Node.js framework
for building efficient and scalable server-side applications. The application
follows a modular architecture pattern with clear separation of concerns.
