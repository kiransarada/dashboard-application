namespace DashboardApplication.Controllers.Api
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using DataProviders.Interfaces;
    using Models;

    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserDataProvider dataProvider;

        public UsersController(IUserDataProvider userDataProvider)
        {
            dataProvider = userDataProvider;
        }

        [HttpGet]
        public async Task<List<User>> Get()
        {
            return await dataProvider.GetUsersAsync();
        }

        [HttpPost("Save")]
        public async Task<bool> Save([FromBody] User user)
        {
            return await dataProvider.InsertUpdateUserAsync(user);
        }

        [HttpPost("Delete")]
        public async Task<bool> Delete([FromBody] User user)
        {
            return await dataProvider.DeleteUserAsync(user);
        }
    }
}
