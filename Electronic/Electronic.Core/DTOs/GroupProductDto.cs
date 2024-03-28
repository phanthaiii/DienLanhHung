using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.DTOs
{
    public class GroupProductDto
    {
        public string CategoryName { get; set; }
        public List<ProductDto> Products { get; set; }
    }
}
