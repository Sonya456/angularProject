using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NameController : ControllerBase
    {
        [HttpGet("GetNames")]
        public ActionResult<IEnumerable<string>> GetNames()
        {
            return new List<string> { "Alice", "Bob", "Cathy" };
        }
    }
}
