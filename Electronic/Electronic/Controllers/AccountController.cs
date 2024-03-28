using Electronic.Core.Data.Models;
using Electronic.Core.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System;
using System.Threading.Tasks;
using Electronic.Core.Constants;
using Electronic.Core.Interfaces;
using Electronic.Core.Enums;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Collections.Generic;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Electronic.Core.Utils;

namespace Electronic.API.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IUserService _userService;
        private readonly IConfiguration _configuration;

        public AccountController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration,
                                 SignInManager<ApplicationUser> signInManager, IUserService userService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _userService = userService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDto model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            //if (user == null)
            //{
            //    var userMobile = await _userservice.GetUserByPhone(model.UserName);
            //    if (userMobile != null)
            //    {
            //        user = await _userManager.FindByNameAsync(userMobile.UserName);
            //    }
            //}
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddYears(10),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                var isAdmin = await _userManager.IsInRoleAsync(user, UserRolesConstant.Admin);

                var userEntity = await _userService.GetUserById(Guid.Parse(user.Id));

                return Ok(new
                {
                    Token = new JwtSecurityTokenHandler().WriteToken(token),
                    Expiration = Utils.ToTimeSpan(token.ValidTo),
                    IsAdmin = isAdmin,
                    Status = (int)ActionStatus.SUCCESS,
                    Mobile = userEntity == null ? string.Empty : userEntity.Mobile,
                    UserName = userEntity == null ? string.Empty : userEntity.UserName
                });
            }
            return Ok(new Response { Status = (int)ActionStatus.ERROR, Message = ErrorMessageConstant.Username_Password_Is_Incorrect });
        }


        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserLoginDto model)
        {
            var result = await RegisterUser(model, false);
            if (!string.IsNullOrEmpty(result))
                return Ok(new Response { Status = (int)ActionStatus.ERROR, Message = result });
            return Ok(new
            {
                Status = (int)ActionStatus.SUCCESS,
                Message = ErrorMessageConstant.User_Created_Successfully,
                Mobile = model.Mobile
            });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] UserLoginDto model)
        {
            var result = await RegisterUser(model, true);
            if (!string.IsNullOrEmpty(result))
                return Ok(new Response { Status = (int)ActionStatus.ERROR, Message = result });

            return Ok(new
            {
                Status = (int)ActionStatus.SUCCESS,
                Message = ErrorMessageConstant.User_Created_Successfully,
                Mobile = model.Mobile
            });
        }

        private async Task<string> RegisterUser(UserLoginDto model, bool isAdmin)
        {
            string errorMessage = string.Empty;

            //if (string.IsNullOrEmpty(model.Mobile))
            //{
            //    return ErrorMessageConstant.Please_Type_Phone_Number;
            //}

            //if (!Utils.Utils.IsPhoneNumber(model.Mobile))
            //{
            //    return ErrorMessageConstant.The_Phone_Number_Is_Incorrect;
            //}

            //if (await _userservice.CheckPhoneExist(model.Mobile))
            //{
            //    return ErrorMessageConstant.The_Phone_Number_Is_Exist;
            //}

            //if (!string.IsNullOrEmpty(model.Email) && (await _userservice.GetUserByEmail(model.Email) != null))
            //{
            //    return ErrorMessageConstant.Email_Already_Exists;
            //}

            var role = isAdmin ? UserRolesConstant.Admin : UserRolesConstant.User;

            var userExists = await _userManager.FindByNameAsync(model.UserName);
            if (userExists != null)
                return ErrorMessageConstant.User_Already_Exists;

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                PhoneNumber = model.Mobile,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                result.Errors.ToList().ForEach(x => errorMessage += x.Description);
                return errorMessage;
            }


            if (!await _roleManager.RoleExistsAsync(role))
                await _roleManager.CreateAsync(new IdentityRole(role));


            if (await _roleManager.RoleExistsAsync(role))
            {
                await _userManager.AddToRoleAsync(user, role);
            }

            var userEntity = MapUserLogin(model, user.Id);
            await _userService.Save(userEntity);

            return errorMessage;
        }

        private UserDto MapUserLogin(UserLoginDto login, string userId)
        {
            return new UserDto()
            {
                UserName = login.UserName,
                Password = login.Password,
                Email = login.Email,
                Mobile = login.Mobile,
                UserId =  Guid.Parse(userId)
            };
        }
    }


}
