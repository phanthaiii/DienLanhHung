using System;
using System.Collections.Generic;

namespace Electronic.Core.Data.Models
{
    public partial class User
    {
        public Guid UserId { get; set; }
        public bool? Activated { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Fullname { get; set; }
        public string Mobile { get; set; }
        public string UserName { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
    }
}
