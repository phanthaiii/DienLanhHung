using Electronic.Core.Data.Extensions;
using Electronic.Core.DTOs;
using Electronic.Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using OfficeOpenXml;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Electronic.API.Controllers
{
    public class ClientController : Controller
    {
        private readonly IProductService _productService;

        public ClientController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        [Route("SearchProductAsync")]
        public async Task<ActionResult> SearchProductAsync(int pageIndex = 1, int pageSize = 10, string searchTerm = null)
        {
            var result = await _productService.SearchProductAsync(pageIndex, pageSize, searchTerm);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetCategoriesAsync")]
        public async Task<ActionResult> GetCategoriesAsync()
        {
            var result = await _productService.GetCategoriesAsync();
            return Ok(result);
        }

        [HttpGet]
        [Route("GetProductByCategory")]
        public async Task<ActionResult> GetProductByCategory(int categoryId)
        {
            var result = await _productService.GetProductByCategory(categoryId);
            return Ok(result);
        }

        [HttpPost]
        [Route("Import")]
        public async Task<IActionResult> ImportAsync(IFormFile file)
        {
            if (file == null || file.Length <= 0)
            {
                return BadRequest("Invalid file");
            }

            var products = new List<AddProductRequest>();          

            var categories = await _productService.GetCategoriesAsync();
            using (var stream = new MemoryStream())
            {
                file.CopyTo(stream);

                using (ExcelPackage package = new ExcelPackage(stream))
                {
                    ExcelWorksheet worksheet = package.Workbook.Worksheets.FirstOrDefault();
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;

                        for (int row = 2; row <= rowCount; row++)
                        {
                            var codeCategory = worksheet.Cells[row, 5].Value.ToString();
                            var category = categories.FirstOrDefault(x => x.Code == codeCategory);


                            var product = new AddProductRequest
                            {
                                Code = worksheet.Cells[row, 1].Value?.ToString(),
                                Name = worksheet.Cells[row, 2].Value?.ToString(),
                                Unit = worksheet.Cells[row, 3].Value?.ToString(),
                                Price = decimal.Parse(worksheet.Cells[row, 4].Value.ToString()),
                                CategoryId = category.Id,
                            };

                            products.Add(product);
                        }
                    }
                }
            }

            await _productService.ImportProducts(products);

            return Ok(true);
        }

        public async Task<List<AddProductRequest>> ImportProducts(string filePath)
        {
            var products = new List<AddProductRequest>();

            FileInfo file = new FileInfo(filePath);

            var categories = await _productService.GetCategoriesAsync();

            using (ExcelPackage package = new ExcelPackage(file))
            {
                ExcelWorksheet worksheet = package.Workbook.Worksheets.FirstOrDefault();
                if (worksheet != null)
                {
                    int rowCount = worksheet.Dimension.Rows;

                    for (int row = 2; row <= rowCount; row++)
                    {
                        var codeCategory = worksheet.Cells[row, 5].Value.ToString();
                        var category = categories.FirstOrDefault(x => x.Code == codeCategory);


                        var product = new AddProductRequest
                        {
                            Code = worksheet.Cells[row, 1].Value.ToString(),
                            Name = worksheet.Cells[row, 2].Value.ToString(),
                            Unit = worksheet.Cells[row, 3].Value.ToString(),
                            Price = decimal.Parse(worksheet.Cells[row, 4].Value.ToString()),
                            CategoryId = category.Id,
                        };

                        products.Add(product);
                    }
                }
            }

            return products;
        }
    }
}
