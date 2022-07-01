USE DBPS;
GO

INSERT INTO TIPOUSUARIO(Tipo)
VALUES ('geral'), ('admin'), ('root');
GO

INSERT INTO USUARIO(IdTipoUsuario,Nome, Email, Senha, Situacao)
VALUES  (1, 'Claudio', 'claudio@email.com', 'claudio123', 1), 
		(1, 'Claudia', 'claudia@email.com', 'claudia123', 0),
		(2, 'Junior', 'junior@email.com', 'junior123', 1 ),
		(3, 'Cesar', 'cesar@email.com', 'cesar123', 3);
GO
