select * from actor order by actor_id desc;
select * from staff;
select * from customer order by customer_id desc;
select * from address order by address_id;
select * from store
select * from rental
select * from payment
select * from film

-- construye consultas para inserta, modificar y borrar en customer, staff y actor --
-- customer --
insert into customer values
(default, 1, 'Darold', 'Trench', 'darold@mail.com', 1, true, default, default, 1),
(default, 2, 'Carlos', 'Arancibia', 'carlos@mail.com', 2, true, default, default, 1),
(default, 3, 'Paloma', 'Shiltze', 'paloma@mail.com', 3, true, default, default, 1);

update customer set first_name = 'Carlito' where customer_id = 601;

delete from customer where customer_id = 600;

-- staff --
insert into staff values
(default, 'Darold', 'Trench', 5, 'darold@mail.com', 1, true, 'Grukur', '123456', default, null);

update staff set first_name = 'Darolito' where staff_id = 3;

delete from staff where staff_id = 3;

-- actor --
insert into actor values
(default, 'Darold', 'Trench', default)

update actor set first_name = 'Darolingo' where actor_id = 201;

delete from actor where actor_id = 201;

--  Listar todas las “rental” con los datos del “customer” dado un año y mes --
					 
select c.*, r.rental_date from customer c
join rental r
on r.customer_id = c.customer_id
where rental_date between '2005-06-01' and '2005-06-30'
order by rental_date asc;
					 
-- Listar Número, Fecha (payment_date) y Total (amount) de todas las “payment”. --
select payment_id Numero, payment_date Fecha, amount Total from payment;

-- Listar todas las “film” del año 2006 que contengan un (rental_rate) mayor a 4.0.--
select title, release_year, rental_rate from film
where rental_rate > 4 and release_year = 2006
order by release_year desc;

-- Realiza un Diccionario de datos que contenga el nombre de las tablas y columnas, si 
-- éstas pueden ser nulas, y su tipo de dato correspondiente.

select table_name, column_name, is_nullable, data_type, character_maximum_length, * from INFORMATION_SCHEMA.COLUMNS
where table_schema = 'public' and table_catalog = 'dvdrental'
order by table_name, ordinal_position, is_nullable asc





