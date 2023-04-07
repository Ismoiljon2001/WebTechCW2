using System.Collections.Generic;
using System.Linq;
using WAD_CW_11064.Repositories;
using WAD_CW_11064.Data;
using WAD_CW_11064.Models;

namespace WebAPI.Repositories
{
    public class ClientRepository : IClientRepository
    {

        private readonly OrderDbContext _dbContext;
        public ClientRepository(OrderDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void DeleteClient(int clientId)
        {
            var client = _dbContext.Client.Find(clientId);
            _dbContext.Client.Remove(client);
            Save();
        }
        public Client GetClientById(int clienttId)
        {
            var cl = _dbContext.Client.Find(clienttId);
            //_dbContext.Entry(prod).Reference(s => s.ProductCategory).Load();
            return cl;
        }
        public IEnumerable<Client> GetClients()
        {

            return _dbContext.Client.ToList();
            //.Include(s => s.ProductCategory).ToList();
        }
        public void InsertClient(Client client)
        {
            _dbContext.Add(client);
            Save();
        }
        public void UpdateClient(Client client)
        {
            _dbContext.Entry(client).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            Save();
        }
        public void Save()
        {
                
            _dbContext.SaveChanges();
        }


    }
}
