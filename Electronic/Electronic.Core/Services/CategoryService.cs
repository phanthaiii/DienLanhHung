using Electronic.Core.Data.Entities;
using Electronic.Core.Data.Models;
using Electronic.Core.DTOs.Category.Request;
using Electronic.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;
using System.Threading.Tasks;

namespace Electronic.Core.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ElectronicContext _electronicContext;

        public CategoryService(ElectronicContext electronicContext)
        {
            _electronicContext = electronicContext;
        }

        public async Task<int> AddCategory(AddCategoryRequest request)
        {
            var category = new Categories()
            {
                Code = request.Code,
                Name = request.Name
            };

            _electronicContext.Categories.Add(category);
            await _electronicContext.SaveChangesAsync();

            return category.Id;
        }

        public async Task<bool> UpdateCategory(AddCategoryRequest request, int id)
        {
            var category = await _electronicContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
            if(category != null)
            {
                category.Code = request.Code;
                category.Name = request.Name;

                await _electronicContext.SaveChangesAsync();
                return true;

            }

            return false;
        }

        public async Task<bool> DeleteCategory(int id)
        {
            var category = await _electronicContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
            if (category != null)
            {
                _electronicContext.Categories.Remove(category);
                await _electronicContext.SaveChangesAsync();

                return true;
            }

            return false;
        }


    }
}
