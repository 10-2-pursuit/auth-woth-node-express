
DROP DATABASE IF EXISTS auth_dev;
DROP TABLE IF EXISTS users;


CREATE DATABASE auth_dev;

\c auth_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT  NOT NULL,
    email TEXT NOT NULL,
    password TEXT  NOT NULL
);