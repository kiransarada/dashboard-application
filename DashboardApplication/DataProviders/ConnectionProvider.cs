namespace DashboardApplication.DataProviders
{
    using System.Data.SqlClient;
    using System.Threading.Tasks;
    using Interfaces;

    public class ConnectionProvider : IConnectionProvider
    {
        private readonly string connectionString;

        public ConnectionProvider(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public async Task<SqlConnection> OpenSqlConnectionAsync()
        {
            var connection = new SqlConnection(this.connectionString);
            await connection.OpenAsync();
            return connection;
        }
    }
}
