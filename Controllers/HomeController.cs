using Microsoft.AspNetCore.Mvc;

namespace my_app.Controllers;


public class HomeController : Controller
{
    [HttpGet]
    public ActionResult Index()
    {
        return View();
    }
}
