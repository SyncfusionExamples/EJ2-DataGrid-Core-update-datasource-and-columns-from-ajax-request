using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Syncfusion.EJ2.Navigations;
using TestSample.Models;
using TestSample.ViewModels;

namespace TestSample.Controllers
{

    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            IndexViewModel indexViewModel = new IndexViewModel();
            indexViewModel.orderDetails = OrdersDetails.GetAllRecords().ToList();
            var customerList = OrdersDetails.GetAllRecords().Select(s => new { CustomerID = s.CustomerID }).Distinct().ToList();
            List<Customers> customers = new List<Customers>();
            foreach(var customer in customerList)
            {
                Customers lCustomer = new Customers();
                lCustomer.CustomerID = customer.CustomerID;
                customers.Add(lCustomer);
            }
            indexViewModel.customers = customers;
            return View(indexViewModel);
        }

        [HttpPost]
        public List<OrdersDetailsNew> GetCustomerData(string data)
        {
            List<OrdersDetailsNew> orderDetails = new List<OrdersDetailsNew>();
            if (!String.IsNullOrEmpty(data)) {

                Customers customers = JsonConvert.DeserializeObject<Customers>(data);
                orderDetails = OrdersDetailsNew.GetNewRecords().Where(s => s.CustomerID == customers.CustomerID).ToList();

            }
            return orderDetails;
            //return PartialView("_DetailPartialView", orderDetails);
        }
    }
   
  }
