using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.Data.Extensions
{
    public class PaginationResult<T>
    {
        public int TotalCount { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public IReadOnlyList<T> Items { get; set; }
    }
}
