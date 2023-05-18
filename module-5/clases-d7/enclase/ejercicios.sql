create table personas(
	id serial primary key,
	nombre varchar(50),
	email varchar(50)
);

drop table personas

create table directivos(
	id serial primary key,
	nombre varchar(50),
	email varchar(50)
);

insert into personas(nombre, email) values
('jose', 'jose@mail.com'), ('carlos', 'jcarlos@mail.com'), ('maria', 'maria@mail.com');

insert into directivos(nombre, email) values
('agustin', 'agustin@mail.com'), ('mario', 'mario@mail.com'), ('maria', 'maria@mail.com');


select nombre, email from personas
union
select nombre, email from directivos


select email, count(email) from
(select nombre, email from personas
union all
select nombre, email from directivos) tabla_subconsulta
group by email


select nombre, email from personas
intersect
select nombre, email from directivos

-- muestra las personas que son empleados pero no directivos
select nombre, email from personas
except
select nombre, email from directivos




