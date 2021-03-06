## Running the app

```bash
# start
$ npm start

# test
$ npm test

```

## Database

```bash

# 1) create database

create database room_reservation;

# 2) create table rooms

create table rooms( 
	room_number INT PRIMARY KEY, 
	price INT
);

# 3) create table booking_records

create table booking_records (
	id SERIAL PRIMARY KEY,
	room_number INT REFERENCES rooms(room_number),
	checkin_date DATE,
	checkout_date DATE
); 

# 4) insert values to rooms

insert into rooms ("room_number", "price") 
values (2, 1000), 
(3, 1000), 
(4, 1000), 
(5, 1000), 
(6, 1000), 
(7, 1000), 
(8, 1000), 
(9, 1000), 
(10, 1000), 
(11, 1000), 
(12, 1000),
(13, 1000),
(14, 1000),
(15, 1000),
(16, 1000),
(17, 1000),
(18, 1000),
(19, 1000),
(20, 1000);

# 4) insert values to booking_records

insert into booking_records ("room_number", "checkin_date", "checkout_date") 
values ('2', '2021-12-22', '2021-12-25'),
('3', '2021-12-22', '2021-12-25'),
('5', '2021-12-22', '2021-12-25'),
('7', '2021-12-22', '2021-12-25'),
('9', '2021-12-22', '2021-12-25'),
('11', '2021-12-22', '2021-12-25'),
('13', '2021-12-22', '2021-12-25'),
('15', '2021-12-22', '2021-12-25'),
('2', '2022-01-02', '2022-01-16'),
('3', '2022-01-06', '2022-01-16'),
('2', '2022-01-18', '2022-01-25'),
('3', '2022-01-18', '2022-01-25'),
('4', '2022-01-19', '2022-01-20'),
('5', '2022-01-19', '2022-01-26'),
('8', '2022-01-22', '2022-01-25'),
('7', '2022-01-22', '2022-01-25'),
('2', '2022-02-02', '2022-02-06'),
('3', '2022-02-02', '2022-02-06'),
('4', '2022-02-02', '2022-02-06'),
('5', '2022-02-02', '2022-02-06'),
('6', '2022-02-04', '2022-02-11'),
('7', '2022-02-04', '2022-02-11'),
('8', '2022-02-04', '2022-02-11'),
('9', '2022-02-04', '2022-02-11'),
('10', '2022-02-04', '2022-02-11'),
('11', '2022-02-16', '2022-02-23'),
('12', '2022-02-16', '2022-02-23'),
('13', '2022-02-16', '2022-02-23'),
('2', '2022-03-01', '2022-03-08'),
('3', '2022-03-01', '2022-03-08'),
('4', '2022-03-01', '2022-03-15'),
('5', '2022-03-01', '2022-03-15'),
('6', '2022-03-09', '2022-03-16'),
('7', '2022-03-09', '2022-03-16'),
('8', '2022-03-09', '2022-03-16'),
('9', '2022-03-09', '2022-03-16'),
('10', '2022-03-09', '2022-03-16'),
('11', '2022-03-09', '2022-03-16'),
('12', '2022-03-19', '2022-03-26'),
('13', '2022-03-19', '2022-03-26'),
('14', '2022-03-24', '2022-04-03'),
('15', '2022-04-02', '2022-04-08'),
('2', '2022-04-02', '2022-04-08'),
('3', '2022-04-02', '2022-04-08'),
('4', '2022-04-05', '2022-04-08'),
('5', '2022-04-05', '2022-04-08'),
('6', '2022-04-05', '2022-04-08'),
('7', '2022-04-16', '2022-04-23'),
('8', '2022-04-16', '2022-04-23'),
('9', '2022-04-16', '2022-04-23'),
('10', '2022-04-16', '2022-04-23'),
('11', '2022-04-27', '2022-05-03'),
('12', '2022-04-27', '2022-05-03'),
('13', '2022-04-27', '2022-05-03'),
('14', '2022-04-27', '2022-05-03'),
('15', '2022-04-27', '2022-05-03'),
('16', '2022-04-27', '2022-05-03'),
('17', '2022-04-30', '2022-05-07'),
('18', '2022-04-30', '2022-05-07'),
('19', '2022-05-03', '2022-05-24'),
('20', '2022-05-03', '2022-05-10'),
('2', '2022-05-03', '2022-05-10'),
('3', '2022-05-03', '2022-05-04'),
('4', '2022-05-06', '2022-05-13'),
('5', '2022-05-06', '2022-05-13'),
('6', '2022-05-07', '2022-05-14'),
('7', '2022-05-07', '2022-05-14'),
('8', '2022-06-01', '2022-06-08'),
('9', '2022-06-01', '2022-06-08');
```
## Swagger

```bash
http://localhost:3000/api/
```
