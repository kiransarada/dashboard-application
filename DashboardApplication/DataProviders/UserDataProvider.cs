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
                var result = await connection.QueryAsync<User>("dbo.spGetUser", commandType: CommandType.StoredProcedure);
                return result.AsList();
            }
        }

        public async Task<bool> InsertUpdateUserAsync(User user)
        {
            using (var connection = await connectionProvider.OpenSqlConnectionAsync())
            {
                var param = new DynamicParameters();
                param.Add("@id", user.Id);
                param.Add("@name", user.Name);
                param.Add("@returnValue", dbType: DbType.Int32, direction: ParameterDirection.ReturnValue);
                connection.Execute("dbo.spInsertUpdateUser", param, commandType: CommandType.StoredProcedure);
                return (param.Get<int>("@returnValue") == 0);
            }
        }
    }
}
