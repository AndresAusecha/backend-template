CREATE TABLE users(
    id serial PRIMARY KEY,
    name VARCHAR(1000) NOT NULL,
    password VARCHAR(100),
    email VARCHAR(50) UNIQUE NOT NULL
);