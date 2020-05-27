USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(99),
    eaten BOOLEAN DEFAULT false,
    primary key(id)
);
    