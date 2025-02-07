using Microsoft.AspNetCore.Mvc;
using PostulacionDocente.ServicesApp.Models;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class UsuarioController: ControllerBase{
    private readonly IUsuarioService _usuarioService;
    private readonly IRegistroService _registroService;
    private readonly PostulacionDocenteContext _context;
    public UsuarioController(IUsuarioService usuarioService, PostulacionDocenteContext context, IRegistroService registroService){
        _usuarioService = usuarioService;
        _context = context;
        _registroService = registroService;
    }

    [HttpGet("getAll")]
    public IActionResult GetAllUsers()
    {
        var usuarios = from usuario in _context.Usuarios
                        select usuario;
        
        
        return Ok(usuarios);
    }

    [HttpPost("loginDocente")]
    public IActionResult LoginDocente([FromBody] LoginUsuarioDTO credenciales)
    {
        return _usuarioService.LoginDocente(credenciales, _context, out string mensaje, out string usuarioCI)  ? Ok(new {mensaje, usuarioCI}) : BadRequest(mensaje);
    }

    [HttpPost("loginJefeCarrera")]
    public IActionResult LoginJefeCarrera([FromBody] LoginUsuarioDTO credenciales)
    {
        return _usuarioService.LoginJefeCarrera(credenciales, _context, out string mensaje, out string usuarioCI) ? Ok(new {mensaje, usuarioCI}) : BadRequest(mensaje);
    }

    [HttpPost("registrarDocente")]
    public IActionResult RegistroDocente([FromBody] DocenteRegistroDTO nuevoDocente)
    {
        return _registroService.RegistrarDocente(nuevoDocente, _context, out string mensaje) ? Ok(new {mensaje}) : BadRequest(new {mensaje});
    }

    [HttpPost("registrarJefeCarrera")]
    public IActionResult RegistroJefeCarrera([FromBody] JefeCarreraRegistroDTO nuevoJefe)
    {
        return _registroService.RegistrarJefeCarrera(nuevoJefe, _context, out string mensaje) ? Ok(new {mensaje}) : BadRequest(new {mensaje});
    }

    [HttpPost("cambiarDatosDocente")]
    public IActionResult CambiarDatosDocente([FromBody] DocenteNuevosDatosDTO docenteNuevosDatos)
    {
        return _usuarioService.CambiarDatosDocente(docenteNuevosDatos, _context, out string mensaje) ? Ok(new {mensaje}) : BadRequest( new {mensaje});
    }

    [HttpPost("cambiarDatosJefe")]
    public IActionResult CambiarDatosJefe([FromBody] JefeCarreraNuevosDatosDTO jefeNuevosDatos)
    {
        return _usuarioService.CambiarDatosJefe(jefeNuevosDatos, _context, out string mensaje) ? Ok(new {mensaje}) : BadRequest(new {mensaje});
    }

    
}