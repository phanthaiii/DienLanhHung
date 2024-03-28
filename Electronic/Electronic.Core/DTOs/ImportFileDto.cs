using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.DTOs
{
    public class ImportFileDto
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Unit { get; set; }
        public Decimal Price { get; set; }
        public string CodeCategory { get; set; }
    }
}
