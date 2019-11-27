using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestSample.Models;

namespace TestSample.ViewModels
{
    public class IndexViewModel
    {
        public List<OrdersDetails> orderDetails { get; set; }
        public List<Customers> customers { get; set; }
    }

    public class Customers
    {
        public string CustomerID { get; set; }
    }
}
