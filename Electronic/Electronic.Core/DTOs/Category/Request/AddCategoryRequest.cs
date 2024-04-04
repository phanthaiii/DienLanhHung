using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.DTOs.Category.Request
{
    public class AddCategoryRequest
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public IFormFile? File { get; set; }
    }
}
