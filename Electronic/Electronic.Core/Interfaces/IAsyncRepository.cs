using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Electronic.Core.Interfaces
{
    public interface IAsyncRepository<T> where T : class
    {
        Task<T> GetByIdAsync(object id);
        Task<IList<T>> ListAllAsync();
        Task<IList<T>> ListPagingAsync(int pageIndex, int pageSize);
        Task<IList<T>> ListAsync(ISpecification<T> spec);
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        Task<int> CountAsync(ISpecification<T> spec);
    }
}
