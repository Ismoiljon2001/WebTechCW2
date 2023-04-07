using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WAD_CW_11064.Data;
using WAD_CW_11064.Models;

namespace WAD_CW_11064.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly OrderDbContext _dbContext;
        public OrderRepository(OrderDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void DeleteCategory(int OrderId)
        {
            var order = _dbContext.Order.Find(OrderId);
            _dbContext.Order.Remove(order);
            Save();
        }


        public Order GetCategoryById(int Id)
        {
            var cate = _dbContext.Order.Find(Id);

            return cate;
        }

        public IEnumerable<Order> GetGategory()
        {
            return _dbContext.Order.ToList();
        }

        public void InsertCategory(Order category)
        {
            _dbContext.Add(category);
            Save();
        }

        public void UpdateCategory(Order category)
        {
            _dbContext.Entry(category).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }

        public void InsertOrder(Order category)
        {
            throw new NotImplementedException();
        }

        public void UpdateOrder(Order category)
        {
            throw new NotImplementedException();
        }

        public void DeleteOrder(int categoryid)
        {
            throw new NotImplementedException();
        }

        public Order GetOrderById(int Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Order> GetOrder()
        {
            throw new NotImplementedException();
        }

    }
}
