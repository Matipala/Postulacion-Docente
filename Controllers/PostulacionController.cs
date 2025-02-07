using Microsoft.AspNetCore.Mvc;
using PostulacionDocente.ServicesApp.Models;

[ApiController]
[Route("[controller]")]
public class PostulacionController : ControllerBase
{
    private readonly IPostulacionService _postulacionService;
    private readonly PostulacionDocenteContext _context;

    public PostulacionController(IPostulacionService postulacionService, PostulacionDocenteContext context)
    {
        _postulacionService = postulacionService;
        _context = context;
    }

    [HttpGet("ConseguirDetallesPostulacion/{postulacionId}")]
    public IActionResult ConseguirDetallesPostulacion(int postulacionId)
    {
        return Ok(_postulacionService.ConseguirDetallesPostulacion(_context, postulacionId));
    }


    [HttpGet("conseguirPostulacionesVigentes/{CI}")]
    public IActionResult ConseguirPostulacionesVigentes(string CI)
    {
        return Ok(_postulacionService.ConseguirPostulacionesVigentes(_context, CI));
    }

    [HttpGet("conseguirPostulacionesHistorial/{CI}")]
    public IActionResult ConseguirPostulacionesHistorial(string CI)
    {
        return Ok(_postulacionService.ConseguirPostulacionesHistorial(_context, CI));
    }
    

}
