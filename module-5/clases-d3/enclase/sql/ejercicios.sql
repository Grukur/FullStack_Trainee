create table empleados (
	id serial primary key,
	primerNombre varchar(50) not null,
	segundoNombre varchar(50),
	primerApellido varchar(50) not null,
	segundoApellido varchar(50),
	remuneracion numeric(8, 2)not null check(remuneracion >= 0) default 0,
	id_rol integer not null references roles(id) default 1
);

create table roles(
	id serial primary key,
	nombre varchar(50) not null,
	descripcion varchar(500)
);


insert into roles (nombre, descripcion) values
('A prueba', 'Alumnos en practica'),
('Desarrollador', 'Desarrollador de software'),
('Jefe de proyecto', 'Encargado de liderar proyectos');



select * from roles;
select * from empleados;




--insert ivan
insert into empleados (primerNombre, segundoNombre, primerApellido, segundoApellido, remuneracion, id_rol)
values ('Ivan', 'Ignacio', 'Verdugo', 'Contreras', 300000, 1);

--insert propio
insert into empleados (primerNombre, segundoNombre, primerApellido, segundoApellido, remuneracion, id_rol)
values ('Pedro', 'Pablo', 'Marmol', 'Picapiedra', 400000, 2);

--kevin
INSERT INTO empleados (primerNombre, primerApellido, segundoApellido, remuneracion, id_rol)
VALUES ('Aquiles', 'Baeza', 'Vaca', 100000, 3);


insert into empleados (primerNombre, segundoNombre, primerApellido, segundoApellido, remuneracion, id_rol)
values ('Pablo', '', 'Picasso', '', 400000, 2);


insert into empleados (primerNombre, segundoNombre, primerApellido, segundoApellido, remuneracion, id_rol)
values ('Betty', '', 'Marmol', '', 100000, 1);


insert into empleados (primerNombre, segundoNombre, primerApellido, segundoApellido, remuneracion, id_rol)
values ('Freddy', 'Farrokh', 'Mercury', 'Bulsara', 100000, 1);


insert into empleados (primerNombre, segundoNombre, primerApellido, segundoApellido, remuneracion, id_rol)
values ('Alejandra', '', 'Saavedra', 'Roca', 1700000, 2);


alter table empleados alter column remuneracion type numeric(10, 2);

select * from roles;
select * from empleados order by remuneracion desc;

select round(avg(remuneracion), 0) from empleados;

select sum(remuneracion) from empleados;

/*empleados q ganan mas de 500 mil*/
select primerNombre, primerApellido, remuneracion from empleados where remuneracion > 500000
order by remuneracion desc;

/*empleados q ganan entre 200 y 500 mil*/
select primerNombre, primerApellido, remuneracion from empleados
where remuneracion between 200000 and 500000 order by remuneracion desc;


/*empleados q ganan entre 200 y 500 mil SIN BETWEEN*/
select primerNombre, primerApellido, remuneracion from empleados
where remuneracion >= 200000 and  remuneracion <= 500000 order by remuneracion desc;


/*uniendo tablas donde coincidan empleados con roles*/
select e.primerNombre, e.primerApellido, e.remuneracion, r.nombre as cargo from empleados e 
join roles r 
on e.id_rol = r.id; --esto es una interseccion


/*empleados q solo sean desarrolladores*/
select e.primerNombre, e.primerApellido, e.remuneracion, r.nombre as cargo from empleados e 
join roles r 
on e.id_rol = r.id --esto es una interseccion
where r.nombre = 'Desarrollador';


/*empleados q sean "desarrollador" y "a prueba"*/
select e.primerNombre, e.primerApellido, e.remuneracion, r.nombre as cargo from empleados e 
join roles r 
on e.id_rol = r.id --esto es una interseccion
where r.nombre = 'Desarrollador' or r.nombre = 'A prueba';


/*empleados q sean "desarrollador" y "a prueba USANDO BETWEEN"*/
select e.primerNombre, e.primerApellido, e.remuneracion, r.nombre as cargo from empleados e 
join roles r 
on e.id_rol = r.id --esto es una interseccion
where r.id between 1 and 2;


/*empleados q sean "desarrollador" y "a prueba USANDO INCLUID"*/
select e.primerNombre, e.primerApellido, e.remuneracion, r.nombre as cargo from empleados e 
join roles r 
on e.id_rol = r.id --esto es una interseccion
where r.nombre in ('Desarrollador', 'A prueba');


--cuantos empleados ocupan cada cargo
select r.nombre as cargo, count(*) from empleados e 
join roles r 
on e.id_rol = r.id
group by r.nombre;


--sueldo a pagar x departamento
select r.nombre as cargo, count(*), sum(e.remuneracion) total_remuneracion from empleados e 
join roles r 
on e.id_rol = r.id
group by r.nombre;


--promover empleado "Ivan" de "A prueba" al cargo de "desarrollador"
--ID cargo actual = 1, cargo a promover = 2
select * from empleados order by id;

update empleados set id_rol = 2, remuneracion = 600000 where id = 1;
/***los campos actualizados se van al final, para evitarlo, se pone un order by id***/


--eliminar empleado(Aquiles), como buena practica los registros no se eliminan, solo se 
--actualizan, en este caso lo eliminamos
--1° buscamos al empleado pasar saber su id
select * from empleados where primerNombre = 'Aquiles' and primerApellido = 'Baeza'; 
--lo eliminamos
delete from empleados where id = 3;



