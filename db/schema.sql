DROP DATABASE IF EXISTS dzntnzqkf6imunzb;

CREATE DATABASE dzntnzqkf6imunzb;

USE dzntnzqkf6imunzb;

CREATE TABLE burgers(
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(99),
    eaten BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    primary key(id)
);
    