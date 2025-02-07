using Microsoft.AspNetCore.Authentication.OAuth;
using PostulacionDocente.ServicesApp.Models;

public interface IJefeCarreraService
{
    public bool AscenderSolicitud(PostulacionDocenteContext context, int postulacionId, out string mensaje);
    // public bool DescenderPostulacion(PostulacionDocenteContext context, int postulacionId, out string mensjae);
    public bool RechazarSolicitud(PostulacionDocenteContext context, int postulacionId, out string mensaje);
    public void RechazarPostulaciones(PostulacionDocenteContext context, int postulacionAceptadaId, Vacante vacante);

    // Nuevos métodos para obtener listas
    List<DocenteDatosPostulacionDTO> ObtenerSolicitudes(PostulacionDocenteContext context, int vacanteId);
    public JefeCarreraPerfilDTO? ConseguirDatosJefeCarrera(PostulacionDocenteContext context, string CI);
    public DocenteDatosPostulacionDTO? RevisarPostulacion(PostulacionDocenteContext context, int postulacionId);
}
