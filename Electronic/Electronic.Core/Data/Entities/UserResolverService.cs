using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace Electronic.Core.Data.Entities
{
    public class UserResolverService
    {
        private readonly IHttpContextAccessor _context;
        public UserResolverService(IHttpContextAccessor context)
        {
            _context = context;
        }

        public string GetUser()
        {
            return _context.HttpContext.User?.Identity?.Name;
        }

        //public async Task<UserDto> GetCurrentUser()
        //{
        //    var userId = _context.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        //    if (!string.IsNullOrEmpty(userId))
        //    {
        //        var user = await _userRepository.GetUserById(userId);
        //        return user;
        //    }
        //    return null;
        //}
    }
}
