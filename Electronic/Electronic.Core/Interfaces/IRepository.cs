﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.Interfaces
{
    public interface IRepository<T> where T : class
    {
        T GetById(object id);
        T GetSingleBySpec(ISpecification<T> spec);
        IEnumerable<T> ListAll();
        IEnumerable<T> List(ISpecification<T> spec);
        T Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        int Count(ISpecification<T> spec);
    }
}
