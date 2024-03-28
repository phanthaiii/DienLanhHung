using Electronic.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Electronic.Core.Interfaces
{
    public interface IUserService
    {
        Task<UserDto> Save(UserDto user);
        Task<UserDto> GetUserById(Guid userId);
    }
}
