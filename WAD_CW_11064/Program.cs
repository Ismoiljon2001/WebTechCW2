using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WAD_CW_11064.Data;

namespace WAD_CW_11064
{

    public class Program
    {
         



        public static void Main(string[] args)
        {

            //  builder.Services.AddDbContext<OrderDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("OrderConnectionString")));



            CreateHostBuilder(args).Build().Run();

        }

/*            app.UseCors(policy => policy AllowAnyHeader().AllowAnymethod().AllowAnyOrigin());
*/        public static IHostBuilder CreateHostBuilder(string[] args) =>

            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {

                    webBuilder.UseStartup<Startup>();
                    
                    
                });

       

    }
}