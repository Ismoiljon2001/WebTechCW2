using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WAD_CW_11064.Models;

namespace WAD_CW_11064.Repositories
{
    public interface IClientRepository
    {
        void InsertClient(Client client);

        void UpdateClient(Client client);

        void DeleteClient(int ClientId);

        Client GetClientById(int ClientId);

        IEnumerable<Client> GetClients();
    }
}
