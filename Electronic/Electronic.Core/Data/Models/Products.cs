using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Electronic.Core.Data.Models
{
    public partial class Products
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; }
        public int? CategoryId { get; set; }
        public string Description { get; set; }
        public double Discount { get; set; }
        public string Image { get; set; }
        public bool Latest { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public DateTime? ProductDate { get; set; }
        public int Quantity { get; set; }
        public bool Special { get; set; }
        public int Views { get; set; }
        public string Unit { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual Categories Category { get; set; }
    }
}
