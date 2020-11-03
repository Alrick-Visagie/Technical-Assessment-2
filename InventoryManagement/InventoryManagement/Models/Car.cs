using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryManagement.Models
{
    public class Car
    {
        [Key]
        public int ID { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Registration { get; set; }


    }
}
