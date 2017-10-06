CREATE PROCEDURE [dbo].[spInsertUpdateUser]
	@id INT,
	@name VARCHAR(100),
	@isActive BIT
AS
	IF @id IS NULL
		INSERT INTO [dbo].[User] (Name, IsActive) VALUES (@name, @isActive)
	ELSE
		UPDATE [dbo].[User]
			SET Name = @name,
				IsActive = @isActive
		WHERE Id = @id
RETURN 0
