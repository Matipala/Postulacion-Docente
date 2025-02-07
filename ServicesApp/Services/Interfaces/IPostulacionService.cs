using PostulacionDocente.ServicesApp.Models;

public interface IPostulacionService
{
    public PostulacionDetallesDTO? ConseguirDetallesPostulacion(PostulacionDocenteContext context, int postulacionId);
    public List<PostulacionDetallesDTO> ConseguirPostulacionesVigentes(PostulacionDocenteContext context, string CI);
    public List<PostulacionDetallesDTO> ConseguirPostulacionesHistorial(PostulacionDocenteContext context, string CI);

}