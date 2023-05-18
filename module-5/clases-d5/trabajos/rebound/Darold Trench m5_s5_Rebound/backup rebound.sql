PGDMP         -                {            m_s5_rebound    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17142    m_s5_rebound    DATABASE        CREATE DATABASE m_s5_rebound WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE m_s5_rebound;
                postgres    false            �            1259    17244    editoriales    TABLE     `   CREATE TABLE public.editoriales (
    id integer NOT NULL,
    nombre character varying(100)
);
    DROP TABLE public.editoriales;
       public         heap    postgres    false            �            1259    17243    editoriales_id_seq    SEQUENCE     �   CREATE SEQUENCE public.editoriales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.editoriales_id_seq;
       public          postgres    false    215            	           0    0    editoriales_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.editoriales_id_seq OWNED BY public.editoriales.id;
          public          postgres    false    214            �            1259    17251    libros    TABLE     �   CREATE TABLE public.libros (
    id integer NOT NULL,
    titulo character varying(100) NOT NULL,
    id_editorial integer NOT NULL,
    autor character varying(50),
    precio numeric
);
    DROP TABLE public.libros;
       public         heap    postgres    false            �            1259    17250    libros_id_seq    SEQUENCE     �   CREATE SEQUENCE public.libros_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.libros_id_seq;
       public          postgres    false    217            
           0    0    libros_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.libros_id_seq OWNED BY public.libros.id;
          public          postgres    false    216            j           2604    17247    editoriales id    DEFAULT     p   ALTER TABLE ONLY public.editoriales ALTER COLUMN id SET DEFAULT nextval('public.editoriales_id_seq'::regclass);
 =   ALTER TABLE public.editoriales ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            k           2604    17254 	   libros id    DEFAULT     f   ALTER TABLE ONLY public.libros ALTER COLUMN id SET DEFAULT nextval('public.libros_id_seq'::regclass);
 8   ALTER TABLE public.libros ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217                       0    17244    editoriales 
   TABLE DATA                 public          postgres    false    215                    0    17251    libros 
   TABLE DATA                 public          postgres    false    217   �                  0    0    editoriales_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.editoriales_id_seq', 3, true);
          public          postgres    false    214                       0    0    libros_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.libros_id_seq', 7, true);
          public          postgres    false    216            m           2606    17249    editoriales editoriales_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.editoriales
    ADD CONSTRAINT editoriales_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.editoriales DROP CONSTRAINT editoriales_pkey;
       public            postgres    false    215            o           2606    17256    libros libros_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.libros
    ADD CONSTRAINT libros_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.libros DROP CONSTRAINT libros_pkey;
       public            postgres    false    217            p           2606    17257    libros libros_id_editorial_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.libros
    ADD CONSTRAINT libros_id_editorial_fkey FOREIGN KEY (id_editorial) REFERENCES public.libros(id);
 I   ALTER TABLE ONLY public.libros DROP CONSTRAINT libros_id_editorial_fkey;
       public          postgres    false    217    3183    217                ^   x���v
Q���W((M��L�KM�,�/�L�I-V��L�Q���M*J�Ts�	uV�0�QPw�K�LT״��$� #�)�yd�`4!���� gn;           x����N1���s����x"��U��^Ͱ;�1�]�-���)|1��ɩ�f:����S,��i	�b� mXi�O4����ύ�>h���Wj�[Ǩ`����Q�v /��s^A��wm<~���!�#�h�B�SJ^������.�LN�Y�Pf$�\K�Mͭt%�f�[6���Gh����(��ٯ��g4 ��R��qG:
/RS�1n��b�x`ޒq{��c�&�������8�8�ι�DE�Ҵ%�s �,#y�S���V����6���9�f�7Pn/     