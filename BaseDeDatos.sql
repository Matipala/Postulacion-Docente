--USE master;
--DROP DATABASE PostulacionDocente;
--GO;

CREATE DATABASE PostulacionDocente;
USE PostulacionDocente;
GO;

DROP TABLE Postulacion;
DROP TABLE MateriaCarrera;
DROP TABLE Vacante;
DROP TABLE Carrera;
DROP TABLE JefeCarrera;
DROP TABLE Docente;
DROP TABLE Materia;
DROP TABLE Estado;
DROP TABLE Usuario;
GO;

CREATE TABLE Usuario (
    UsuarioId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(60) NOT NULL,
    CI VARCHAR(20) NOT NULL UNIQUE,
    FechaNacimiento DATE,
    NumeroTelefono VARCHAR(20) NOT NULL UNIQUE,
    Correo VARCHAR(50) NOT NULL UNIQUE,
    Contrasenha VARCHAR(50) NOT NULL
);

CREATE TABLE Estado(
    EstadoId INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    Mensaje VARCHAR(300) NOT NULL
);

CREATE TABLE Materia(
    MateriaId INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    NombreMateria VARCHAR(50) NOT NULL,
    Sigla VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE Docente (
    DocenteId INT PRIMARY KEY NOT NULL IDENTITY(1,1),
    Especialidad VARCHAR(40) NOT NULL,
    Experiencia INT,
    DescripcionPersonal VARCHAR(300),
    Grado VARCHAR(40),
    UsuarioId INT NOT NULL --FOREIGN KEY REFERENCES Usuario(UsuarioId)
);

CREATE TABLE JefeCarrera(
    JefeCarreraId INT PRIMARY KEY NOT NULL IDENTITY(1, 1),
    UsuarioId INT NOT NULL, --FOREIGN KEY REFERENCES Usuario(UsuarioId)
);

CREATE TABLE Carrera(
    CarreraId INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    NombreCarrera VARCHAR(50) NOT NULL,
    Sigla VARCHAR(10) NOT NULL UNIQUE,
	JefeCarreraId INT --FOREIGN KEY REFERENCES JefeCarrera(JefeCarreraID)
);

CREATE TABLE Vacante(
    VacanteId INT PRIMARY KEY NOT NULL IDENTITY(1,1),
    NombreVacante VARCHAR(50) NOT NULL,
    Descripcion VARCHAR(300),
    FechaInicio DATE NOT NULL,
    FechaFin DATE NOT NULL,
    MateriaId INT NOT NULL, --FOREIGN KEY REFERENCES Materia(MateriaId)
	JefeCarreraId INT NOT NULL --FOREIGN KEY REFERENCES JefeCarrera(JefeCarreraId)
);

CREATE TABLE MateriaCarrera(
    MateriaId INT NOT NULL, --FOREIGN KEY REFERENCES Materia(MateriaId),
    CarreraId INT NOT NULL --FOREIGN KEY REFERENCES Carrera(CaerreraId)
);

CREATE TABLE Postulacion(
    PostulacionId INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    EstadoId INT NOT NULL, -- FOREIGN KEY REFERENCES Estado(EstadoId)
    DocenteId INT NOT NULL, -- FOREIGN KEY REFERENCES Docente(DocenteId)
	VacanteId INT NOT NULL -- FOREIGN KEY REFERENCES Vacante(VacanteId)
);

GO;


ALTER TABLE Docente
ADD CONSTRAINT FK_Usuario_Docente 
FOREIGN KEY (UsuarioId) REFERENCES Usuario(UsuarioId);

ALTER TABLE JefeCarrera
ADD CONSTRAINT FK_Usuario_JefeCarrera
FOREIGN KEY (UsuarioId) REFERENCES Usuario(UsuarioId);

ALTER TABLE Carrera
ADD CONSTRAINT FK_JefeCarrera_Carrera
FOREIGN KEY (JefeCarreraId) REFERENCES JefeCarrera(JefeCarreraId);

ALTER TABLE Vacante
ADD CONSTRAINT FK_Materia_Vacante
FOREIGN KEY (MateriaId) REFERENCES Materia(MateriaId);

ALTER TABLE Vacante
ADD CONSTRAINT FK_JefeCarrera_Vacante
FOREIGN KEY (JefeCarreraId) REFERENCES JefeCarrera(JefeCarreraId);

ALTER TABLE MateriaCarrera
ADD CONSTRAINT PK_MateriaCarrera 
PRIMARY KEY (MateriaId, CarreraId);

ALTER TABLE MateriaCarrera
ADD CONSTRAINT FK_Materia_MateriaCarrera
FOREIGN KEY (MateriaId) REFERENCES Materia(MateriaId);

ALTER TABLE MateriaCarrera
ADD CONSTRAINT FK_Carrera_MateriaCarrera
FOREIGN KEY (CarreraId) REFERENCES Carrera(CarreraId);

ALTER TABLE Postulacion
ADD CONSTRAINT FK_Estado_Postulacion
FOREIGN KEY (EstadoId) REFERENCES Estado(EstadoId);

ALTER TABLE Postulacion
ADD CONSTRAINT FK_Docente_Postulacion
FOREIGN KEY (DocenteId) REFERENCES Docente(DocenteId);

ALTER TABLE Postulacion
ADD CONSTRAINT FK_Vacante_Postulacion
FOREIGN KEY (VacanteId) REFERENCES Vacante(VacanteId);

GO;


INSERT INTO Usuario VALUES 
('Daniel Roland Peñaranda Colque', '10990989', '2005-05-02', '68829531', 'eldanielitu@gmail.com', '0123456789'),
('Miriam Leticia Peñaranda Colque', '0000', '2009-11-24', '0000', 'leticia@gmail.com', '0123456789'),
('Miriam Colque Sotar', '1111', '1981-09-24', '61388900', 'miriamcolquw@gmail.com', '0123456789'),
('Thiago Matías Peñaranda Colque', '2222', '2016-02-16', '2222', 'thiago@gmail.com', '0123456789'),
('Postulante Uno', '1234', '2000-01-01', '11111111', 'postulante1@gmail.com', '11111111'),
('Docente Uno', '2345', '2000-01-01', '22222222', 'docente1@gmail.com', '11111111'),
('Director Uno', '3456', '2000-01-01', '33333333', 'director1@gmail.com', '11111111'),
('Postulante Dos', '4567', '2000-01-01', '44444444', 'postulante2@gmail.com', '11111111'),
('Director Dos', '5678', '2000-01-01', '55555555', 'director2@gmail.com', '11111111');

insert into Materia values
('Técnicas de representación I', 'TEC-001'), --desde pertenece a arquitectura (1)
('Taller de diseño I', 'DIS-001'),
('Historia Crítica I', 'HIS-001'),
('Material y Tecnología I', 'TEC-011'),
('Técnicas de representación II', 'TEC-021'),
('Historia Crítica II', 'HIS-002'),
('Materiales y Tecnología II', 'TEC-012'),
('Taller de diseño II', 'DIS-002'),
('Taller de diseño III', 'DIS-003'),
('Fabricación digital I', 'FAB-001'),
('Instalaciones I', 'FAB-011'),
('Taller de diseño IV', 'DIS-004'),
('Diseño Urbano I', 'DIS-011'),
('Instalaciones II', 'FAB-012'),
('Taller de diseño V', 'TEC-005'),
('Diseño Urbano II', 'DIS-012'), 
('Introducción a la programación', 'SIS-001'), --desde aquí, pertenece a Software (17)
('Fundamentos de Software', 'SFW-001'),
('Programación I', 'SIS-002'),
('Bases de datos I', 'SIS-011'),
('Estructuras de datos', 'SIS-021'),
('Programación II', 'SIS-003'),
('Bases de datos II', 'SIS-012'),
('Diseño de Software', 'SIS-004'),
('Física I', 'FIS-001'),--desde aquí, pertenece a ciencias exactas (25)
('Matemáticas básicas', 'MAT-001'),
('Cálculo I', 'MAT-002'),
('Cálculo II', 'MAT-003'),
('Cálculo III', 'MAT-004'),
('Física II', 'FIS-002'),
('Química I', 'FIS-011'),
('Química II', 'FIS-012'),
('Probabilidad y estadística I', 'MAT-011'),
('Probabilidad y estadística II', 'MAT-012'),
('Termodinámica', 'FIS-003'),
('Álgebra Lineal', 'MAT-000'),
('Física III', 'FIS-004'),
('Física IV', 'FIS-005'),
('Inglés A1','IDI-001'), --Desde aquí son idiomas (39)
('Inglés A2','IDI-002'),
('Inglés B1','IDI-003'),
('Inglés B2','IDI-004'),
('Inglés C1','IDI-005'),
('Inglés C2','IDI-006'),
('Anatomía Humana','MED-001'), -- Desde aquí es Medicina (45)
('Fisiología Humana', 'MED-002'),
('Microbiología Clínica','MED-003'),
('Anatomía Patológica','MED-004');

insert into Estado values
('En revisión'),
('Exposición/Entrevista'),
('Aceptado'),
('Rechazado');

insert into Docente values
('Mecatrónico', 3, 'Este es un texto que debe ir en la descripción', 'Ingeniero', 4),
('Turismo', 5, 'La usuaria que está revisando se advierte que no es muy agradable que digamos', 'Experta', 2),
('Arquitecto', 1, 'Este usuario de prueba ha agarrado todas las vacantes que hay porque está desesperado por trabajar', 'Recién egresado', 5),
('Ingeniero de software',20,'Este usuario de prueba debe tener dos puestos de trabajo aceptados y otros rechazados','Programador Senior',6),
('Derecho',1,'Este usuario de prueba no debería tener ninguna postulación al momento de crear este programa','Recién egresado',8);

insert into JefeCarrera values
(1),
(3),
(7),
(9);

insert into Carrera values
('Arquitectura', 'ARQ', 1),
('Ingeniería de Software', 'SFW', 1),
('Ciencias exactas', 'MAT', 2),
('Idiomas', 'IDI', 3),
('Medicina', 'MED', 4);

insert into Vacante values 
('Docente tiempo completo', 'finjan que esto es una descripción, ya no puedo aaaaaaa', GETDATE(), '2025-01-01', 1, 1),
('Docente con paciencia', 'Se necesita un docente que enseñe con paciencia la historia del arte', GETDATE(), '2025-01-01', 3,1),
('Se necesita urgentemente docente', 'Van a iniciar las clases y aún no llega docente, vengan cuando puedan!!!!', GETDATE(), '2025-01-01', 2,1),
('Docente y ya', 'Rápido por favor', GETDATE(), '2025-01-01', 7,1),
('...', '...', '2024-01-01','2025-01-01', 24, 1),
('Aloh?', 'Cómo se hace para obtener un docente que de buena nota?', '2024-01-01','2025-01-01', 39, 3),
('Docente tiempo horario', 'Qué es tiempo horario?', '2024-01-01','2025-01-01', 40,3),
('Docente medio tiempo', 'Lunes, martes y miércoles', '2024-01-01','2025-01-01', 41,3),
('Docente tiempo completo', 'Todos los días, por favor', '2024-01-01','2025-01-01', 45, 4),
('Docente tiempo horario', 'Ya no sé lo que hago aaaa', '2024-01-01','2025-01-01', 46,4);

insert into MateriaCarrera values
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1),
(11,1),
(12,1),
(13,1),
(14,1),
(15,1),
(16,1),
(17,2),
(18,2),
(19,2),
(20,2),
(21,2),
(22,2),
(23,2),
(24,2),
(25,3),
(26,3),
(27,3),
(28,3),
(29,3),
(30,3),
(31,3),
(32,3),
(33,3),
(34,3),
(35,3),
(36,3),
(37,3),
(38,3),
(39,4),
(40,4),
(41,4),
(42,4),
(43,4),
(44,4),
(45,5),
(46,5),
(47,5),
(48,5);

insert into Postulacion values
(4, 4, 1),
(4, 4, 2),
(5, 4, 3),
(5, 1, 1),
(5, 2, 1),
(5, 3, 1),
(5, 1, 2),
(5, 2, 2),
(5, 3, 2),
(3, 1, 3),
(3, 2, 3),
(3, 3, 3),
(5, 1, 4),
(1, 3, 4),
(2, 3, 5),
(2, 3, 5),
(2, 1, 6),
(3, 2, 6),
(1, 3, 7),
(1, 2, 8);

