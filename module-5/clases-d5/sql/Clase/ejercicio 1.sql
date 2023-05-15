alter table vehiculos add column stock numeric;
alter table vehiculos add column estado boolean;

select * from vehiculos;

update vehiculos set stock = 10 where id = 101;
update vehiculos set stock = 15 where id = 102;
update vehiculos set stock = 0 where id = 103;
update vehiculos set stock = 5 where id = 104;
Update vehiculos Set stock= 10 Where id=105;

update vehiculos set estado = case
when stock >0 then true
when stock <=0 then false end