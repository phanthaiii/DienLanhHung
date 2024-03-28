using Microsoft.AspNetCore.Mvc;

namespace Electronic.API.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
