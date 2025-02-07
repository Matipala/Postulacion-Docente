using Microsoft.AspNetCore.Mvc;
using PostulacionDocente.ServicesApp.Models;

[ApiController]
[Route("[controller]")]


public class CarreraController: ControllerBase
{
    private readonly PostulacionDocenteContext _context;
    private readonly ICarreraService _carreraService;
    public CarreraController(PostulacionDocenteContext context, ICarreraService carreraService)
    {
        _context = context;
        _carreraService = carreraService;
    }


    [HttpGet("ConseguirCarrerasDisponibles")]
    public IActionResult ConseguirCarrerasDisponibles()
    {
        return Ok(_carreraService.GetAllCarrerasDisponibles(_context));
    }
}