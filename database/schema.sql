DROP DATABASE sdc_postgres;

CREATE DATABASE sdc_postgres;

USE sdc_postgres;

CREATE TABLE gallery (
imgid BIGSERIAL NOT NULL PRIMARY KEY,
url VARCHAR(255) NOT NULL,
);