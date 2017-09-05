using System.Collections.Generic;
using DashboardApplication.Models;
using Microsoft.AspNetCore.Mvc;

namespace DashboardApplication.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        [HttpGet]
        public List<User> Get()
        {
            return new List<User>
            {
                new User
                {
                    Id = 1,
                    Name = "John"
                },
                new User
                {
                    Id = 2,
                    Name = "Emily"
                }
            };
        }
    }
}
