CREATE DATABASE DBPS
GO

USE DBPS;
GO

CREATE TABLE TIPOUSUARIO (
	IdTipoUsuario TINYINT PRIMARY KEY IDENTITY,
	Tipo VARCHAR(256) NOT NULL
);
GO

CREATE TABLE USUARIO (
	IdUsuario INT PRIMARY KEY IDENTITY,
	IdTipoUsuario TINYINT FOREIGN KEY REFERENCES TIPOUSUARIO(IdTipoUsuario),
	Nome VARCHAR(50) NOT NULL,
	Email VARCHAR(256) UNIQUE NOT NULL,
	Senha VARCHAR(62) NOT NULL,
	Situacao BIT NOT NULL
);
GO

