using Electronic.Core.Data.Entities;
using Electronic.Core.Data.Extensions;
using Electronic.Core.Data.Models;
using Electronic.Core.DTOs;
using Electronic.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
//using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Electronic.Core.Services
{
    public class ProductService : IProductService
    {
        private readonly ElectronicContext _electronicContext;
        
        public ProductService(ElectronicContext electronicContext)
        {
            _electronicContext = electronicContext;
        }

        public async Task<PaginationResult<ProductDto>> GetProductAsync(int pageIndex, int pageSize,string searchTerm = null)
        {
            var query = _electronicContext.Products.AsQueryable();

            if (!string.IsNullOrWhiteSpace(searchTerm))
            {
                query = query.Where(p => p.Name.Trim().ToLower().Contains(searchTerm.Trim().ToLower()));
            }

            var totalCount = await query.CountAsync();

            // Apply pagination
            query = query.Skip(pageIndex * pageSize)
                         .Take(pageSize);

            var products = await query.Select(x=> new ProductDto()
            {
                Id = x.Id,
                Code = x.Code,
                Name = x.Name,
                Description = x.Description,
                Price = x.Price,
                Unit = x.Unit,
            }).ToListAsync();

            return new PaginationResult<ProductDto>()
            {
                TotalCount = totalCount,
                PageIndex = pageIndex,
                PageSize = pageSize,
                Items = products
            };
        }

        public async Task<List<CategoryDto>> GetCategoriesAsync()
        {
            var result = await _electronicContext.Categories.Select(x => new CategoryDto()
            {
                Id = x.Id,
                Name = x.Name,
                Code = x.Code
            }).ToListAsync();

            return result;
        }

        public async Task<GroupProductDto> GetProductByCategory(int categoryId)
        {
            var result = await _electronicContext.Categories
                .Where(x => x.Id == categoryId)
                .Include(x=> x.Products)
                .Select(x => new GroupProductDto()
                {
                    CategoryName = x.Name,
                    Products = x.Products.Select(o => new ProductDto()
                    {
                        Id = o.Id,
                        Code = o.Code,
                        Name = o.Name,
                        Description = o.Description,
                        Price = o.Price
                    }).ToList()
                }).FirstOrDefaultAsync();

            return result;
        }

        public async Task ImportProducts (List<AddProductRequest> request)
        {
            var productsToAdd = request.Select(x => new Products()
            {
                CategoryId = x.CategoryId,
                Code = x.Code,
                Description = x.Description,
                Name = x.Name,
                Price = x.Price,
                Unit = x.Unit
            });

            // Add the products directly to the context
            _electronicContext.Products.AddRange(productsToAdd);

            // Save changes asynchronously
            await _electronicContext.SaveChangesAsync();
        }


    }
}
