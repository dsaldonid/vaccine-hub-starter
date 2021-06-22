--  create a new users table with id, password, first_name, last_name, email, location, and date columns
create table users(
    id          Serial primary key,
    password    text not null,
    first_name  text not null,
    last_name   text not null,
    email       text not null unique check (POSITION('@' in email)  > 1),
    location    text not null,
    date        date not null 
);