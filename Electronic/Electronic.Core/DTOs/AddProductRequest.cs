using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.DTOs
{
    public class AddProductRequest
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Unit { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
    }
}
