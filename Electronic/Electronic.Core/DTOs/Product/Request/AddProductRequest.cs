using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.DTOs.Product.Request
{
    public class AddProductRequest
    {
        public string Code { get; set; }
        public int? CategoryId { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public DateTime? ProductDate { get; set; }
        public int Quantity { get; set; }
        public string Unit { get; set; }
    }
}
