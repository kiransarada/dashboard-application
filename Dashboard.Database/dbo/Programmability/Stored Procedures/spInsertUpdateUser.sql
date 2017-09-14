CREATE PROCEDURE [dbo].[spInsertUpdateUser]
	@id INT,
	@name VARCHAR(100)
AS
	IF @id IS NULL
		INSERT INTO [dbo].[User] (Name) VALUES (@name)
	ELSE
		UPDATE [dbo].[User]
			SET Name = @name
		WHERE Id = @id
RETURN 0
