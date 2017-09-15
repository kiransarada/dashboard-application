CREATE PROCEDURE [dbo].[spDeleteUser]
	@id INT
AS
	DELETE FROM [dbo].[User]
	WHERE Id = @id
RETURN 0