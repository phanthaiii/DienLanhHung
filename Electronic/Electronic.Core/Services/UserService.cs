using Electronic.Core.Data.Entities;
using Electronic.Core.Data.Extensions;
using Electronic.Core.Data.Models;
using Electronic.Core.DTOs;
using Electronic.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Electronic.Core.Services
{
    public class UserService : EfRepository<User>, IUserService
    {
        private readonly ElectronicContext _context;
        public UserService(ElectronicContext context) : base(context)
        {
            _context = context;

            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        public async Task<UserDto> Save(UserDto user)
        {
            var entity = await _context.User.FirstOrDefaultAsync(x=> x.UserId == user.UserId);
            if(entity == null)
            {
                entity = new User()
                {
                    UserId = user.UserId,
                    UserName = user.UserName,
                    Email = user.Email,
                    Mobile = user.Mobile,
                };

                await AddAsync(entity);
            }

            return user;
        }

        public async Task<UserDto> GetUserById(Guid userId)
        {
            var user = await _context.User.FirstOrDefaultAsync(x => x.UserId == userId);
            if (user != null)
            {
                var result = new UserDto()
                {
                    UserId = userId,
                    UserName = user.UserName,
                    Email = user.Email,
                    Mobile = user.Mobile,
                    Activated = user.Activated,
                    Address = user.Address,
                    Fullname = user.Fullname
                };

                return result;
            }
            return null;
        }
    }
}
