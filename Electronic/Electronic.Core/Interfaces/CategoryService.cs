using Electronic.Core.DTOs.Category.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Electronic.Core.Interfaces
{
    public interface ICategoryService
    {
        Task<int> AddCategory(AddCategoryRequest request);
        Task<bool> UpdateCategory(AddCategoryRequest request, int id);
        Task<bool> DeleteCategory(int id);
    }
}
