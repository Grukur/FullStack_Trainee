create group peras;

create user nino1 password '1' in group peras;
create user nino2 password '2' in group peras;
create user nino3 password '3' in group peras;

create table usuarios(
	id serial primary key,
	nombre varchar(50) not null, 
	correo varchar(50) not null,
	estado boolean default true
);

create table cuentas(
	id serial primary key,
	n_cuenta varchar(50) not null,
	tipo_cuenta integer not null references tipo_cuenta(id),
	id_usuario integer not null references usuarios(id)
);

create table tipo_cuenta(
	id serial primary key,
	nombre varchar(50) not null	
);

alter table cuentas add column saldo numeric(50) check(saldo>=-5000);
alter table cuentas add constraint unique_cuenta unique (n_cuenta);

select * from cuentas;


insert into usuarios(nombre, correo) values
('Pedro', 'pedro@mail.com'),
('Juan', 'juan@mail.com'),
('Diego', 'diego@mail.com'),
('Horacio', 'horacio@mail.com'),
('Carlos', 'carlos@mail.com') returning *;

insert into tipo_cuenta(nombre) values
('Cuenta Vista'), ('Cuenta Corriente'), ('Chequera Electronica'), ('Cuenta Ahorro');

insert into cuentas values
(default, '10001', 1, 1, 50000),
(default, '10002', 2, 2, 50000),
(default, '10003', 3, 3, 50000),
(default, '10004', 4, 4, 50000),
(default, '10005', 1, 5, 50000);

create group Administradores;
create group Operarios;

create user admin1 password '1' in group Administradores;
create user op1 password '1' in group Operarios;

grant all on usuarios to Administradores;
grant all on cuentas, tipo_cuenta to Administradores;
grant select on usuarios, cuentas, tipo_cuenta to Operarios;

revoke select on tipo_cuenta from Operarios;





