CREATE DATABASE IF NOT EXISTS Njs-apirest

USE Njs-apirest

CREATE TABLE employee (
    id  int(11) AUTO_INCREMENT not null,
    name    varchar(45) default null,
    salary int(5) default null,
    primary key (id)
);

DESCRIBE employee

INSERT INTO employee VALUES
    ('', 'Joe', 1000),
    ('', 'Henry', 2000),
    ('', 'San', 2500),
    ('', 'Max', 1500);
