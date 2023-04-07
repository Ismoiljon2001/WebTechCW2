using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WAD_CW_11064.Models;

namespace WAD_CW_11064.Repositories
{
    public interface IOrderRepository
    {
        void InsertOrder(Order order);

        void UpdateOrder(Order order);

        void DeleteOrder(int orderid);

        Order GetOrderById(int OrderId);

        IEnumerable<Order> GetOrder();
    }
}
