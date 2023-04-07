using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WAD_CW_11064.Models;

namespace WAD_CW_11064.Repositories
{
    public interface IProductRepository
    {
        void InsertProduct(Product product);

        void UpdateProduct(Product product);

        void DeleteProduct(int ProductId);

        Product GetProductById(int ProductId);

        IEnumerable<Product> GetProducts();
    }
}
