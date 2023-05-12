create table empresas(
	run  varchar(10) not null primary key,
	nombre varchar(120) not null,
	direccion varchar(120) not null,
	telefono varchar(15) not null,
	correo varchar(80) not null, 
	web varchar(50)	
);

create table clientes(
	run  varchar(10) not null primary key,
	nombre varchar(120) not null,
	correo varchar(80) not null, 
	direccion varchar(120) not null,
	telefono varchar(15) not null
);

create table herramientas(
	id numeric(12) not null primary key,
	nombre varchar(120) not null,
	precio_dia numeric(12) not null check(precio_dia >=0)
);

create table arriendos(
	folio numeric(12) not null primary key,
	fecha date default now(),
	dias numeric(5) not null, 
	valor_dia numeric(12) not null check(valor_dia >=0),
	garantia varchar(30) not null,
	id_herramienta numeric(12) not null references herramientas(id),
	id_cliente varchar(10) not null references clientes(run)
);

insert into empresas(run, nombre, direccion, telefono, correo, web)
values
('25555555-4', 
 'Alameda', 
 'calle juanco 21', 
 '912345678', 
 'soporte@alameda.cl', 
 'www.alameda.cl');
 
 insert into herramientas(id, nombre, precio_dia)
 values (1, 'martillo', 1000),
 (2, 'sierra', 1500),
 (3, 'taladro', 10000),
 (4, 'caladora', 15000),
 (5, 'rotomartillo', 25000);
 
 insert into clientes(run, nombre, correo, direccion, telefono)
 values ('10111222-3', 'Adolfo', 'adolfo@mail.com', 'calle 1', '211112222'),
 ('10111333-4', 'Bruno', 'bruno@mail.com', 'calle 2', '233332222'),
 ('10111444-5', 'Hugo', 'hugo@mail.com', 'calle 3', '244441111');

select * from clientes;
delete from clientes where run = '10111444-5';

delete from herramientas where id = 1;

insert into arriendos(folio, dias, valor_dia, garantia, id_herramienta, id_cliente)
values (1, 10, 25000, 'cheque por 100.000', 5, '10111444-5'),
(2, 15, 10000, 'tarjeta credito por 60000', 3, '10111444-5');

update clientes set correo = 'adolfo_no_SS@mail.com' where run = '10111222-3';

select * from herramientas;

select * from arriendos where id_cliente = '10111333-4';

select * from clientes where nombre like 'A%';
