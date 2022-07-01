
SELECT TOP (10) [IdTipoUsuario]
      ,[Tipo]
  FROM [DBPS].[dbo].[TIPOUSUARIO]

SELECT TOP (10) [IdUsuario]
      ,[IdTipoUsuario]
      ,[Nome]
      ,[Email]
      ,[Senha]
      ,[Situacao]
  FROM [DBPS].[dbo].[USUARIO]