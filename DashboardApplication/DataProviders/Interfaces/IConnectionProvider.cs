namespace DashboardApplication.DataProviders.Interfaces
{
    using System.Data.SqlClient;
    using System.Threading.Tasks;

    public interface IConnectionProvider
    {
        Task<SqlConnection> OpenSqlConnectionAsync();
    }
}
