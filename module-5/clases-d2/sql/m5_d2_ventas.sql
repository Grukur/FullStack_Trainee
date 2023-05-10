CREATE TABLE Cliente(
	id serial primary key, 
	nombre varchar(50) not null,
	apellido varchar(50) not null
);
create table Comuna(
	id serial primary key, 
	nombre varchar(50) not null
);

create table Direccion(
	id serial primary key, 
	calle varchar(50) not null,
	numero varchar(50) not null,
	id_cliente integer not null,
	codigo_postal integer not null,
	id_comuna integer not null, 
	foreign key (id_cliente) references Cliente(id),
	foreign key (id_comuna) references Comuna(id)
);

select * from producto;

insert into cliente (nombre, apellido) values
('Carlos', 'Soto'),('Juan', 'Nuñez'), ('Pedro', 'Gomez');

insert into Comuna (nombre) values
('Macul'), ('Ñuñoa'), ('Florida');

insert into Direccion (calle, numero, id_cliente, codigo_postal, id_comuna) 
values ('calle juanito', '450B', 1, 45010, 3), 
('calle alonso', '150', 2, 5001, 2),
('calle pedrillo', '45', 3, 450, 1);

create table Producto(
	id serial primary key,
	nombre varchar(50) not null,
	precio decimal not null check(precio>=0),
	stock integer not null check(stock>=0)	
)

insert into Producto(nombre, precio, stock) values
('galleta cockie 80gr', 500, 20), 
('bebida coca 3lt', 600, 30), 
('cloro gel 1lt', 1000, 15);

create table Factura (
	id serial primary key,
	fecha date not null default now(),
	id_cliente integer not null,
	FOREIGN KEY(id_cliente) REFERENCES Cliente(id)
);

create table detalle_factura (
	id_factura integer not null,
	id_producto integer not null, 
	unidades integer not null check(unidades>=1),
	precio decimal not null check(precio>=0),
	FOREIGN KEY(id_factura) REFERENCES factura(id),
	FOREIGN KEY(id_producto) REFERENCES Producto(id),
	primary key (id_factura, id_producto)
);

insert into Factura(id_cliente) values (1);
insert into detalle_factura (id_factura, id_producto, unidades, precio) values
(1, 1, 5, 500), (1, 2, 3, 600), (1,3,10,1000);

select * from detalle_factura where id_producto = 3;
select * from detalle_factura;

select f.id, f.fecha, f.id_cliente, c.nombre, c.apellido, df.id_producto, p.nombre, df.unidades, df.precio, (df.unidades*df.precio) as subtotal from factura f
join cliente c
on f.id_cliente = c.id
join detalle_factura df
on f.id = df.id_factura
join producto p
on df.id_producto = p.id;
