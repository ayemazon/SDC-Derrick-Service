DROP DATABASE IF EXISTS image_gallery;

CREATE DATABASE image_gallery;

CREATE TABLE gallery (
  imgid BIGSERIAL NOT NULL PRIMARY KEY,
  url VARCHAR(255) NOT NULL
);

insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s1.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s2.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s3.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s4.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s5.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s6.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s7.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s8.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s9.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s10.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s11.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s12.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s13.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s14.jpg');
insert into gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s15.jpg');