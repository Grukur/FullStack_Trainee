create table pelicula(
	id serial primary key,
	titulo varchar(100) not null,
	estreno numeric(4) not null,
	director varchar(100)not null
);
 
create table reparto(
	id serial primary key,
	id_pelicula integer not null references pelicula(id),
	actor varchar(100) not null
);

-- listar todos los actores que parecen en la pelicula titanic -- 
select id from pelicula where titulo ilike 'titanic';
select actor from reparto where id_pelicula = 2;

-- sub query --
select actor from reparto where id_pelicula = 
(select id from pelicula where titulo ilike 'titanic');

-- join --
select p.titulo, p.estreno, p.director, r.actor
from pelicula p
inner join reparto r on p.id = r.id_pelicula
where p.titulo ilike 'titanic';

-- listar los 10 directores con mas peliculas --
select director, count(*) from pelicula
group by director order by count desc limit 10;

-- indicar cuantos actores distintos hay --
select count(distinct actor) as total_actores from reparto;

select distinct actor from reparto;

-- indicar peliculas estrenadas entre 1990 y 1994 y ordenar por titulo de manera ascendente--
select * from pelicula where estreno > 1989 and estreno < 2000
	order by titulo asc;
	
select * from pelicula where estreno between 1990 and 1999
	order by titulo asc;
	
-- listar los actores de la pelicula mas nueva --
select * from pelicula
	order by estreno desc limit 5;
	
select * from pelicula
	order by estreno desc, id desc limit 1;
	
select actor from reparto r 
	inner join(select * from pelicula
	order by estreno desc, id desc limit 1) as x
	on r.id_pelicula = x.id;
	
-- listar los actores de las 5 peliculas mas nuevas --
select id from pelicula
	order by estreno desc, id desc limit 5;
	
select actor from reparto where id_pelicula in (select id from pelicula
	order by estreno desc, id desc limit 5)

-- usando el in --
select * from reparto r
	inner join pelicula p 
	on r.id_pelicula = p.id
	where id_pelicula in (select id from pelicula
	order by estreno desc, id desc limit 5)
	
select * from pelicula;

-- inserte una pelicula en memoria virtual y luego otra en disco --
begin;
insert into pelicula(titulo, estreno, director) values
('star Wars IV', 1988, 'George Lukas');
rollback;

insert into pelicula(id, titulo, estreno, director) values
(101,'star Wars IV', 1988, 'George Lukas');

-- para resetear el contrador: --
select pg_get_serial_sequence('pelicula', 'id');
alter sequence public.pelicula_id_seq restart with 101;

-- actualiza 5 directores  con rollback --
begin;
update pelicula set director = upper(director) where id between 1 and 5;
select * from pelicula
	order by id asc;
rollback;

begin;
update pelicula set director = upper(director) where director in ilike 
('robert', 'james', 'mel', 'gore', 'steven')
rollback;

-- inserte 3 actores a la pelicula rambo utilizando savepoint --
select * from pelicula where titulo ilike '%Rambo%';

begin;
insert into reparto values (default, 72, 'Ivan'),(default, 72, 'Kevin');
select * from reparto where id_pelicula = 72;
savepoint primer_insert;
insert into reparto values (default, 72, 'Paloma');
commit;

-- eliminna las peliculas del año 2008 --
begin;
insert into pelicula values (104, 'sin pelicula', 2023, 'ecamp')
update reparto set id_pelicula = 104 where id in (select id from reparto where id_pelicula in (select id from pelicula where estreno = 2008))
delete from pelicula where estreno = 2008;
select * from pelicula
	order by estreno desc;
rollback;

-- inserte 2 actores para cada pelicula estrenada el 2001 --
select id from pelicula where estreno = 2001;
insert into reparto values(default, 13,'wilma'), (default, 13,'darold');
insert into reparto values(default, 16,'jhonny'), (default, 16,'hector');
insert into reparto values(default, 55,'jaszmin'), (default, 55,'pablo');
insert into reparto values(default, 78,'carlos'), (default, 78,'star');
insert into reparto values(default, 94,'kevin'), (default, 94,'blue');
insert into reparto values(default, 99,'paloma'), (default, 99,'greene');

select * from reparto
	order by id desc;
	
-- Actualice la pelicula King Kong por el nombre de Donkey Kong, sin cambiar en disco duro --
select * from pelicula where titulo ilike 'Donkey Kong';
begin;
update pelicula set titulo = 'Donkey Kong' where titulo ilike 'king kong';
rollback;




