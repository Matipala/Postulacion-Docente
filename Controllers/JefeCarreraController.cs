using Microsoft.AspNetCore.Mvc;
using PostulacionDocente.ServicesApp.Models;
using System;

[ApiController]
[Route("[controller]")]
public class JefeCarreraController : ControllerBase
{
    private readonly IJefeCarreraService _jefeCarreraservice;
    private readonly PostulacionDocenteContext _context;

    public JefeCarreraController(IJefeCarreraService jefeCarreraservice, PostulacionDocenteContext context)
    {
        _jefeCarreraservice = jefeCarreraservice;
        _context = context;
    }

    [HttpGet("verSolitciudes/{vacanteId}")]
    public IActionResult VerSolicitudes(int vacanteId)
    {
        return Ok(_jefeCarreraservice.ObtenerSolicitudes(_context, vacanteId));
    }

    [HttpGet("conseguirDatosJefeCarrera/{CI}")]
    public IActionResult ConseguirDatosJefeCarrera(string CI)
    {
        return Ok(_jefeCarreraservice.ConseguirDatosJefeCarrera(_context, CI));
    }

    [HttpGet("revisarPostulacion/{postulacionId}")]
    public IActionResult RevisarPostulacion(int postulacionId)
    {
        return Ok(_jefeCarreraservice.RevisarPostulacion(_context, postulacionId));
    }

    [HttpPut("ascenderPostulacion/{postulacionId}")]
    public IActionResult AscenderPostulacion(int postulacionId)
    {
        return _jefeCarreraservice.AscenderSolicitud(_context, postulacionId, out string mensaje) ? Ok(new { mensaje }) : BadRequest(new { mensaje });
    }

    // [HttpPut("descenderPostulacion/{postulacionId}")]
    // public IActionResult DescenderPostulacion(int postulacionId)
    // {

    // }

    [HttpPut("rechazarPostulacion/{postulacionId}")]
    public IActionResult RechazarPostulacion(int postulacionId)
    {
        return _jefeCarreraservice.RechazarSolicitud(_context, postulacionId, out string mensaje) ? Ok(new { mensaje }) : BadRequest(new { mensaje });
    }


}
