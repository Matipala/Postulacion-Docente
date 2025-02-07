using Microsoft.AspNetCore.Mvc;
using PostulacionDocente.ServicesApp.Models;

namespace PostulacionDocente.Controllers;

[ApiController]
[Route("[controller]")]
public class MateriaController : ControllerBase
{
    private readonly IMateriaService _materiaService;
    private readonly PostulacionDocenteContext _context;

    public MateriaController(IMateriaService materiaService, PostulacionDocenteContext context)
    {
        _materiaService = materiaService;
        _context = context;
    }

    [HttpGet("conseguirMaterias")]
    public IActionResult GetMateria(){

        return Ok(_materiaService.conseguirMaterias(_context));
    }

    [HttpGet("conseguirMateriasPorCarrera")]
    public IActionResult ConseguirMateriasPorCarrera(){

        return Ok(_materiaService.ConseguirMateriasPorCarrera(_context));
    }

    [HttpGet("conseguirMateriasJefeCarrera/{CI}")]
    public IActionResult ConseguirMateriasJefeCarrera(string CI)
    {
        return Ok(_materiaService.ConseguirMateriasJefeCarrera(_context, CI));
    }
}