-- Creación de la tabla Users
CREATE TABLE "USERS" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creación de la tabla Accounts
CREATE TABLE "ACCOUNTS" (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    currency CHAR(3) NOT NULL,
    balance DECIMAL(15, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "USERS" (id) ON DELETE CASCADE
);

-- Creación de la tabla Categories
CREATE TABLE "CATEGORIES" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(50),
    type VARCHAR(50) NOT NULL,
    color VARCHAR(20),
    user_id INTEGER NOT NULL,
    account_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES "USERS" (id) ON DELETE CASCADE,
    FOREIGN KEY (account_id) REFERENCES "ACCOUNTS" (id) ON DELETE SET NULL
);

-- Creación de la tabla Transactions
CREATE TABLE "TRANSACTIONS" (
    id SERIAL PRIMARY KEY,
    account_id INTEGER NOT NULL,
    created_by INTEGER NOT NULL,
    category_id INTEGER,
    amount DECIMAL(15, 2) NOT NULL,
    type VARCHAR(20) NOT NULL,
    date TIMESTAMP NOT NULL,
    description TEXT,
    FOREIGN KEY (account_id) REFERENCES "ACCOUNTS" (id) ON DELETE CASCADE,
    FOREIGN KEY (created_by) REFERENCES "USERS" (id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES "CATEGORIES" (id) ON DELETE SET NULL
);

-- Creación de la tabla TransactionsSplit
CREATE TABLE "TRANSACTIONS_SPLIT" (
    id SERIAL PRIMARY KEY,
    transaction_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    FOREIGN KEY (transaction_id) REFERENCES "TRANSACTIONS" (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES "USERS" (id) ON DELETE CASCADE
);

-- Creación de la tabla Budgets
CREATE TABLE "BUDGETS" (
    id SERIAL PRIMARY KEY,
    account_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    period VARCHAR(20) NOT NULL,
    FOREIGN KEY (account_id) REFERENCES "ACCOUNTS" (id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES "CATEGORIES" (id) ON DELETE CASCADE
);

-- Agregando índices para mejorar el rendimiento
CREATE INDEX idx_transaction_account ON "TRANSACTIONS"(account_id);
CREATE INDEX idx_transaction_category ON "TRANSACTIONS"(category_id);
CREATE INDEX idx_transaction_date ON "TRANSACTIONS"(date);
CREATE INDEX idx_category_user ON "CATEGORIES"(user_id);
CREATE INDEX idx_account_user ON "ACCOUNTS"(user_id);

-- Trigger para actualizar el campo updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar el trigger a las tablas que tienen updated_at
CREATE TRIGGER update_user_updated_at BEFORE UPDATE ON "USERS"
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_account_updated_at BEFORE UPDATE ON "ACCOUNTS"
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
