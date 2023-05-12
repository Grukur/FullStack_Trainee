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