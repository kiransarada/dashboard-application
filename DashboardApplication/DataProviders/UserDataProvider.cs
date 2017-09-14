namespace DashboardApplication.DataProviders
{
    using System.Collections.Generic;
    using System.Data;
    using System.Threading.Tasks;
    using Dapper;
    using Interfaces;
    using Models;

    public class UserDataProvider : IUserDataProvider
    {
        private readonly IConnectionProvider connectionProvider;

        public UserDataProvider(IConnectionProvider connectionProvider)
        {
            this.connectionProvider = connectionProvider;
        }
        
        public async Task<List<User>> GetUsersAsync()
        {
            using (var connection = await connectionProvider.OpenSqlConnectionAsync())
            {
                var result = await connection.QueryAsync<User>("spGetUser", commandType: CommandType.StoredProcedure);
                return result.AsList();
            }
        }
    }
}
