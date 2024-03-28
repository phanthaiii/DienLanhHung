using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.DTOs
{
    public class UserDto : UserLoginDto
    {
        public Guid UserId { get; set; }
        public bool? Activated { get; set; }
        public string Address { get; set; }
        public string Fullname { get; set; }
    }
}
