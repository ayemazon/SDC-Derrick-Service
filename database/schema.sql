DROP DATABASE IF EXISTS sdc_postgres;

CREATE DATABASE sdc_postgres;

USE sdc_postgres;

CREATE TABLE gallery (
  imgid INT AUTO_INCREMENT NOT NULL,
  imageurl VARCHAR(255) NOT NULL,
  PRIMARY KEY (imgid)
)