using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Data.Model
{
    public class Customer
    {
        [Required]
        public int CustomerId { get; set; }

        [Required, StringLength(80)]
        public string FirstName { get; set; }
        [Required, StringLength(80)]
        public string LastName { get; set; }
    }
}
