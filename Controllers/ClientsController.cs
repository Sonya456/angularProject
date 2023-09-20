using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic; // Add this to use 'IEnumerable'

namespace my_app.Controllers
{
    [ApiController]
    [Route("api/Client")]
    public class ClientsController : ControllerBase
    {
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<testapp.Client> Get() // Fully qualify 'Client' with its namespace
        {
            return new testapp.Client[] // Fully qualify 'Client' with its namespace
            {
                new testapp.Client { Name = "John", Age = 34 }, // Fully qualify 'Client' with its namespace
                new testapp.Client { Name = "Mark", Age = 12 }, // Fully qualify 'Client' with its namespace
                new testapp.Client { Name = "Bill", Age = 24 }  // Fully qualify 'Client' with its namespace
            };
        }
    }
}
