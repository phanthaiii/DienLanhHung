using Electronic.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Electronic.API.Controllers
{
    public class AdminController : Controller
    {
        private readonly ICategoryService _categoryService;

        public AdminController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }


    }
}
