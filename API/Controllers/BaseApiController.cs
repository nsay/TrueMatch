using API.Entities;
using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")] // localhost:5000/api/users
    [ApiController]
    public class BaseApiController() : ControllerBase
    {
       
    }
}
