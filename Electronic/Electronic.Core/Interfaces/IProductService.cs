using Electronic.Core.Data.Extensions;
using Electronic.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Electronic.Core.Interfaces
{
    public interface IProductService
    {
        Task<PaginationResult<ProductDto>> GetProductAsync(int pageIndex, int pageSize, string searchTerm = null);
        Task<List<CategoryDto>> GetCategoriesAsync();
        Task<GroupProductDto> GetProductByCategory(int categoryId);
        Task ImportProducts(List<AddProductRequest> request);
    }
}
