using PostulacionDocente.ServicesApp.Models;

public interface IRegistroService
{
    public bool RegistrarDocente(DocenteRegistroDTO docente, PostulacionDocenteContext context, out string mensaje);
    public bool RegistrarJefeCarrera(JefeCarreraRegistroDTO jefeCarrera, PostulacionDocenteContext context, out string mensaje);
    public bool CredencialesEnUsoDocente(DocenteRegistroDTO docente, PostulacionDocenteContext context);
    public bool CredencialesEnUsoJefeCarrera(JefeCarreraRegistroDTO jefeCarrera, PostulacionDocenteContext context);
    public bool CredencialesUsoUsuario(string correo, string CI, string numeroTelefono, PostulacionDocenteContext context);

}