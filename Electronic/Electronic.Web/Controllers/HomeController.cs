using Microsoft.AspNetCore.Mvc;

namespace Electronic.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
