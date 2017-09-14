namespace DashboardApplication.DataProviders.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models;

    public interface IUserDataProvider
    {
        Task<List<User>> GetUsersAsync();

        Task<bool> InsertUpdateUserAsync(User user);
    }
}
