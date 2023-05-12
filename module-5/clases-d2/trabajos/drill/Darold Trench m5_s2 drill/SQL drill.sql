create table empresas(
	run  varchar(15) not null primary key,
	nombre varchar(50) not null,
	direccion varchar(50) not null,
	telefono varchar(15) not null,
	correo varchar(50) not null, 
	web varchar(50)	
);

create table clientes(
	run  varchar(15) not null primary key,
	nombre varchar(50) not null,
	correo varchar(50) not null, 
	direccion varchar(50) not null,
	telefono varchar(15) not null,
	alta boolean default false
);

-- tabala pivote cliente venta --
create table clinetes_venta(
	id_clientes varchar(50) not null references clientes(run),
	id_venta integer not null references ventas(folio),
	primary key (id_clientes, id_venta)	
);

-- tabala pivote vehiculos venta --
create table vehiculos_venta(
	id_vehiculo integer not null references vehiculos(id),
	id_venta integer not null references ventas(folio),	
	primary key(id_vehiculo, id_venta)
);

-- tabala pivote tipo_vehiculos vehiculos --
create table tipoVehiculo_vehiculos(
	id_tipo_vehiculo integer not null references tipo_vehiculos(id),
	id_vehiculo integer not null references vehiculos(id),
	primary key(id_tipo_vehiculo, id_vehiculo)	
);

-- tabala pivote marca vehiculos --
create table marca_vehiculos(
	id_marca integer not null references marcas(id),
	id_vehiculo integer not null references vehiculos(id),
	primary key(id_marca, id_vehiculo)	
);

-- tabala pivote mantencion_venta --
create table mantencion_venta(
	id_venta integer not null references ventas(folio),
	id_mantencion integer not null references mantenciones(id),
	primary key(id_venta, id_mantencion)	
);

create table vehiculos(
	id serial primary key,
	patente varchar(12) not null,
	marca varchar(50) not null,
	modelo varchar(50) not null,
	color varchar(25) not null,
	precio numeric(12,2) not null,
	frecuencia_matencion varchar(50) not null
);

create table ventas(
	folio serial primary key,
	fecha date default now(),
	monto numeric(12,2) not null
);

create table mantenciones(
	id serial primary key,
	fecha date default now(),
	trabajaos_realizados varchar(250)
);

create table tipo_vehiculos(
	id serial primary key,
	nombre varchar(50) not null
);

create table marcas(
	id serial primary key,
	nombre varchar(50) not null
);