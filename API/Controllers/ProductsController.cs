using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("/api/products")]
    public class ProductsController:ControllerBase
    {
        private readonly DataContext _context;
        public ProductsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int? id)
        {
            if(id == null)
            {
               return NotFound();
            }
            var product = await _context.Products.FirstOrDefaultAsync(p=>p.Id == id);
            if(product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}