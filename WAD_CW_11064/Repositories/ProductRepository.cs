using System.Collections.Generic;
using System.Linq;
using WAD_CW_11064.Repositories;
using WAD_CW_11064.Data;
using WAD_CW_11064.Models;

namespace WebAPI.Repositories
{
    public class ProductRepository : IProductRepository
    {

        private readonly OrderDbContext _dbContext;
        public ProductRepository(OrderDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void DeleteProduct(int productId)
        {
            var product = _dbContext.Product.Find(productId);
            _dbContext.Product.Remove(product);
            Save();
        }
        public Product GetProductById(int productId)
        {
            var prod = _dbContext.Product.Find(productId);
            //_dbContext.Entry(prod).Reference(s => s.ProductCategory).Load();
            return prod;
        }
        public IEnumerable<Product> GetProducts()
        {

            return _dbContext.Product.ToList();
            //.Include(s => s.ProductCategory).ToList();
        }
        public void InsertProduct(Product product)
        {
            _dbContext.Add(product);
            Save();
        }
        public void UpdateProduct(Product product)
        {
            _dbContext.Entry(product).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            Save();
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }


    }
}
