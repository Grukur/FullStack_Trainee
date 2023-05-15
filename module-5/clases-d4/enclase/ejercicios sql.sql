select * from cliente;

select * from empresa;
alter table empresa alter column telefono set data type varchar(15);

select * from mantencion;
alter table mantencion alter column trabajosrealizados set data type text;
alter table mantencion rename column idmantencion to id_mantencion;

select * from marca;
alter table marca rename column idmarca to id_marca;
alter table marca drop column marca_id;

select * from tipo_vehiculo;
alter table tipovehiculo rename column idtipovehiculo to id_tipovehiculo;
alter table tipovehiculo drop column tipovehiculo_id;
alter table tipovehiculo rename to tipo_vehiculo;

select * from vehiculo;
alter table vehiculo rename column marca_idmarca to id_marca;
alter table vehiculo drop column tipovehiculo_tipovehiculo_id;

select * from venta;
alter table venta drop column vehiculo_idvehiculo;
alter table venta rename column vehiculo_vehiculo_id to id_vehiculo;

select * from pg_constraint
where confrelid = 'cliente'::regclass;

select * from pg_constraint
where confrelid = 'empresa'::regclass;

select * from pg_constraint
where confrelid = 'mantencion'::regclass;

select * from pg_constraint
where confrelid = 'marca'::regclass;


select * from vehiculo;
select * from marca;

alter table vehiculo
drop constraint vehiculo_marca_fk;

ALTER TABLE vehiculo
    ADD CONSTRAINT vehiculo_marca_fk FOREIGN KEY ( id_marca )
        REFERENCES marca ( id_marca );
		
select * from pg_constraint
where confrelid = 'tipo_vehiculo'::regclass;

select * from vehiculo;
select * from tipo_vehiculo;

alter table vehiculo
drop constraint vehiculo_tipovehiculo_fk;

ALTER TABLE vehiculo
    ADD CONSTRAINT vehiculo_tipovehiculo_fk FOREIGN KEY ( id_tipovehiculo )
        REFERENCES tipo_vehiculo ( id_tipovehiculo );
		
select * from pg_constraint
where confrelid = 'vehiculo'::regclass;

select * from pg_constraint
where confrelid = 'venta'::regclass;

select * from cliente;

ALTER TABLE venta
    ADD CONSTRAINT venta_cliente_fk FOREIGN KEY ( cliente_rut )
        REFERENCES cliente ( rut );

ALTER TABLE venta
    ADD CONSTRAINT venta_vehiculo_fk FOREIGN KEY ( vehiculo_idvehiculo );


-- modificaciones de restricciones --
alter table mantencion
drop constraint mantencion_pk;

alter table mantencion
add constraint mantencion_pk primary key(id_mantencion);

-- mod tipo_vehiculo --

select * from tipo_vehiculo;

alter table tipo_vehiculo
drop constraint tipovehiculo_pk cascade;

alter table tipo_vehiculo
add constraint tipovehiculo_pk primary key(id_tipovehiculo);

-- mod vehiculo --
select * from vehiculo;

alter table vehiculo
drop constraint vehiculo_pk;

alter table vehiculo
add constraint vehiculo_pk primary key(id_vehiculo);

-- mod venta --
select * from venta;

alter table venta
drop constraint venta_pk cascade;

alter table venta
add constraint venta_pk primary key(folio);

-- mod fk vehiculo_marca --
select * from vehiculo;
select * from marca;

alter table vehiculo
drop constraint vehiculo_marca_fk;

alter table vehiculo
add constraint vehiculo_marca_fk foreign key(id_marca)
references marca(id_marca);

-- mod fk mantencion_venta --
select * from mantencion;

ALTER TABLE mantencion
    ADD CONSTRAINT mantencion_venta_fk FOREIGN KEY ( venta_folio )
        REFERENCES venta ( folio );
		
-- mod fk vehiculo_tipovehiculo --
select * from vehiculo;
select * from tipo_vehiculo;

ALTER TABLE vehiculo
    ADD CONSTRAINT vehiculo_tipovehiculo_fk FOREIGN KEY ( id_tipovehiculo )
        REFERENCES tipo_vehiculo ( id_tipovehiculo );
		
-- mod fk vehiculo_venta --
select * from venta;
select * from vehiculo;

ALTER TABLE venta
    ADD CONSTRAINT venta_vehiculo_fk FOREIGN KEY ( id_vehiculo )
		REFERENCES vehiculo ( id_vehiculo );
	
-- eliminamos index --
drop index venta__idx;

select * from venta;

insert into vehiculos
('101', 'HHGG23', 'Suzuki', 'Vitara', 'blanco', 19000000, 20000, '333', '111')
('10555888-5', 'Antonio')

insert into venta(folio, fecha, monto, cliente_rut, id_vehiculo)
values ('101', now(), 19500000, '10555888-5', '101')