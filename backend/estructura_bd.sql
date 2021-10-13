-- bd_smileApp
CREATE DATABASE IF NOT EXISTS bd_smileApp;
USE bd_smileApp;


-- tbl_categoria
CREATE OR REPLACE TABLE tbl_categoria (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

-- tbl_proveedor
CREATE OR REPLACE TABLE tbl_proveedor (
    id int NOT NULL AUTO_INCREMENT,
	identificacion varchar(50) NOT NULL,
    nombre varchar(255) NOT NULL,
	telefono varchar(100),
	direccion varchar(100),
	redes_sociales varchar(200),
	fecha_registro timestamp NOT NULL default CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);


-- tbl_articulo
CREATE OR REPLACE TABLE tbl_articulo (
    id int NOT NULL AUTO_INCREMENT,
	nombre varchar(255) NOT NULL,
	precio float NOT NULL,
	descripcion varchar(500),
	id_proveedor int,
	id_categoria int,
	FOREIGN KEY (id_proveedor) REFERENCES tbl_proveedor (id) ON DELETE CASCADE,
	FOREIGN KEY (id_categoria) REFERENCES tbl_categoria (id) ON DELETE CASCADE,
	PRIMARY KEY (id)
);

-- tbl_comentarios
CREATE OR REPLACE TABLE tbl_comentarios (
    id int NOT NULL AUTO_INCREMENT,
	calificacion float NOT NULL,
	comentarios varchar(500),
	id_articulo int,
	FOREIGN KEY (id_articulo) REFERENCES tbl_articulo (id) ON DELETE CASCADE,
	PRIMARY KEY (id)
);


-- Insert proveedor
INSERT INTO `tbl_proveedor` (`identificacion`, `nombre`, `telefono`, `direccion`, `redes_sociales`, `fecha_registro`) VALUES ( '100', 'Proveedor1', '3002342448', 'Cl 76 80 197', NULL, current_timestamp());

-- Insert categoria
INSERT INTO `tbl_categoria` (`nombre`) VALUES ('Juguetes');

-- Insert producto
INSERT INTO `tbl_articulo` ( `nombre`, `precio`, `descripcion`, `id_proveedor`, `id_categoria`) VALUES ('Aro Luz', '40000', 'Aro para selfie', 1, 1);
