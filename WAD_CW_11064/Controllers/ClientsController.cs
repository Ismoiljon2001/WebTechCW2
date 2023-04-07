using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WAD_CW_11064.Data;
using WAD_CW_11064.Models;
using WAD_CW_11064.Repositories;

namespace WAD_CW_11064.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;

        public ClientsController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        // GET: api/Clients
        [HttpGet]
        public IActionResult GetClients()
        {
            return new ObjectResult(_clientRepository.GetClients());
        }

        // GET: api/Clients/5
        [HttpGet("{id}")]
        public IActionResult GetClient(int id)
        {
            return new OkObjectResult(_clientRepository.GetClientById(id));
        }

        // PUT: api/Clients/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public IActionResult PutClients(int id, Client client)
        {
            if (client != null)
            {
                using (var scope = new TransactionScope())
                {
                    _clientRepository.UpdateClient(client);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }
        // POST: api/Clients
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public IActionResult PostClient(Client client)
        {
            using (var scope = new TransactionScope())
            {
                _clientRepository.InsertClient(client);
                scope.Complete();
                return new OkResult();
            }
        }

        // DELETE: api/Clients/5
        [HttpDelete("{id}")]
        public IActionResult DeleteClient(int id)
        {
            _clientRepository.DeleteClient(id);
            return new OkResult();
        }
    }
}
