using Microsoft.AspNetCore.Mvc;
using PostulacionDocente.ServicesApp.Models;

[ApiController]
[Route("[controller]")]
public class DocenteController : ControllerBase
{
    private readonly IDocenteService _docenteService;
    private readonly PostulacionDocenteContext _context;
    public DocenteController(IDocenteService docenteService, PostulacionDocenteContext context)
    {
        _docenteService = docenteService;
        _context = context;
    }
    
    [HttpGet("conseguirDatosDocente/{usuarioCI}")]
    public IActionResult ConseguirDetallesDocente(string usuarioCI)
    {
        return Ok(_docenteService.ConseguirDetallesDocente(_context, usuarioCI));
    }

    [HttpPost("postularse")]
    public IActionResult Postularse([FromBody] NuevaPostulacionDTO nuevaPostulacion)
    {
        return _docenteService.Postularse(_context, nuevaPostulacion, out string mensaje) ? Ok(new {mensaje}) : BadRequest(new{ mensaje });
    }
}