PGDMP       %                    {            m5_s4_ejercicios    15.2    15.2     &           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            '           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            (           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            )           1262    17023    m5_s4_ejercicios    DATABASE     �   CREATE DATABASE m5_s4_ejercicios WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
     DROP DATABASE m5_s4_ejercicios;
                postgres    false            �            1259    17024    cliente    TABLE     #  CREATE TABLE public.cliente (
    rut character varying(10) NOT NULL,
    nombre character varying(120) NOT NULL,
    correo character varying(80) NOT NULL,
    direccion character varying(120) NOT NULL,
    celular character varying(15) NOT NULL,
    alta character varying(10) NOT NULL
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    17029    empresa    TABLE     #  CREATE TABLE public.empresa (
    rut character varying(10) NOT NULL,
    nombre character varying(120) NOT NULL,
    direccion character varying(120) NOT NULL,
    telefono character varying(15) NOT NULL,
    correo character varying(80) NOT NULL,
    web character varying(50) NOT NULL
);
    DROP TABLE public.empresa;
       public         heap    postgres    false            �            1259    17034 
   mantencion    TABLE     �   CREATE TABLE public.mantencion (
    id_mantencion numeric(12,0) NOT NULL,
    fecha date NOT NULL,
    trabajos_realizados text NOT NULL,
    venta_folio numeric(12,0) NOT NULL
);
    DROP TABLE public.mantencion;
       public         heap    postgres    false            �            1259    17039    marca    TABLE     o   CREATE TABLE public.marca (
    id_marca numeric(12,0) NOT NULL,
    nombre character varying(120) NOT NULL
);
    DROP TABLE public.marca;
       public         heap    postgres    false            �            1259    17046    tipo_vehiculo    TABLE     ~   CREATE TABLE public.tipo_vehiculo (
    id_tipovehiculo numeric(12,0) NOT NULL,
    nombre character varying(120) NOT NULL
);
 !   DROP TABLE public.tipo_vehiculo;
       public         heap    postgres    false            �            1259    17053    vehiculo    TABLE     �  CREATE TABLE public.vehiculo (
    id_vehiculo numeric(12,0) NOT NULL,
    patente character varying(10) NOT NULL,
    marca character varying(20) NOT NULL,
    modelo character varying(20) NOT NULL,
    color character varying(15) NOT NULL,
    precio numeric(12,0) NOT NULL,
    frecuenciamantencion numeric(5,0) NOT NULL,
    id_tipovehiculo numeric(12,0) NOT NULL,
    id_marca numeric(12,0) NOT NULL
);
    DROP TABLE public.vehiculo;
       public         heap    postgres    false            �            1259    17060    venta    TABLE     �   CREATE TABLE public.venta (
    folio numeric(12,0) NOT NULL,
    fecha date NOT NULL,
    monto numeric(12,0) NOT NULL,
    cliente_rut character varying(10) NOT NULL,
    id_vehiculo numeric(12,0) NOT NULL
);
    DROP TABLE public.venta;
       public         heap    postgres    false                      0    17024    cliente 
   TABLE DATA                 public          postgres    false    214   �!                 0    17029    empresa 
   TABLE DATA                 public          postgres    false    215   �!                 0    17034 
   mantencion 
   TABLE DATA                 public          postgres    false    216   �!                  0    17039    marca 
   TABLE DATA                 public          postgres    false    217   �!       !          0    17046    tipo_vehiculo 
   TABLE DATA                 public          postgres    false    218   "       "          0    17053    vehiculo 
   TABLE DATA                 public          postgres    false    219   #"       #          0    17060    venta 
   TABLE DATA                 public          postgres    false    220   5"       }           2606    17028    cliente cliente_pk 
   CONSTRAINT     Q   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pk PRIMARY KEY (rut);
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pk;
       public            postgres    false    214                       2606    17033    empresa empresa_pk 
   CONSTRAINT     Q   ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pk PRIMARY KEY (rut);
 <   ALTER TABLE ONLY public.empresa DROP CONSTRAINT empresa_pk;
       public            postgres    false    215            �           2606    17114    mantencion mantencion_pk 
   CONSTRAINT     a   ALTER TABLE ONLY public.mantencion
    ADD CONSTRAINT mantencion_pk PRIMARY KEY (id_mantencion);
 B   ALTER TABLE ONLY public.mantencion DROP CONSTRAINT mantencion_pk;
       public            postgres    false    216            �           2606    17045    marca marca_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.marca
    ADD CONSTRAINT marca_pk PRIMARY KEY (id_marca);
 8   ALTER TABLE ONLY public.marca DROP CONSTRAINT marca_pk;
       public            postgres    false    217            �           2606    17116    tipo_vehiculo tipovehiculo_pk 
   CONSTRAINT     h   ALTER TABLE ONLY public.tipo_vehiculo
    ADD CONSTRAINT tipovehiculo_pk PRIMARY KEY (id_tipovehiculo);
 G   ALTER TABLE ONLY public.tipo_vehiculo DROP CONSTRAINT tipovehiculo_pk;
       public            postgres    false    218            �           2606    17118    vehiculo vehiculo_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT vehiculo_pk PRIMARY KEY (id_vehiculo);
 >   ALTER TABLE ONLY public.vehiculo DROP CONSTRAINT vehiculo_pk;
       public            postgres    false    219            �           2606    17120    venta venta_pk 
   CONSTRAINT     O   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_pk PRIMARY KEY (folio);
 8   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_pk;
       public            postgres    false    220            �           2606    17126    mantencion mantencion_venta_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.mantencion
    ADD CONSTRAINT mantencion_venta_fk FOREIGN KEY (venta_folio) REFERENCES public.venta(folio);
 H   ALTER TABLE ONLY public.mantencion DROP CONSTRAINT mantencion_venta_fk;
       public          postgres    false    216    3209    220            �           2606    17121    vehiculo vehiculo_marca_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT vehiculo_marca_fk FOREIGN KEY (id_marca) REFERENCES public.marca(id_marca);
 D   ALTER TABLE ONLY public.vehiculo DROP CONSTRAINT vehiculo_marca_fk;
       public          postgres    false    3203    217    219            �           2606    17131 !   vehiculo vehiculo_tipovehiculo_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT vehiculo_tipovehiculo_fk FOREIGN KEY (id_tipovehiculo) REFERENCES public.tipo_vehiculo(id_tipovehiculo);
 K   ALTER TABLE ONLY public.vehiculo DROP CONSTRAINT vehiculo_tipovehiculo_fk;
       public          postgres    false    218    3205    219            �           2606    17081    venta venta_cliente_fk    FK CONSTRAINT     |   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_cliente_fk FOREIGN KEY (cliente_rut) REFERENCES public.cliente(rut);
 @   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_cliente_fk;
       public          postgres    false    214    3197    220            �           2606    17136    venta venta_vehiculo_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_vehiculo_fk FOREIGN KEY (id_vehiculo) REFERENCES public.vehiculo(id_vehiculo);
 A   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_vehiculo_fk;
       public          postgres    false    220    219    3207                  

            

            

             

      !      

      "      

      #      

     