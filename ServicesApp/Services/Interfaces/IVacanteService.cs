using PostulacionDocente.ServicesApp.Models;

public interface IVacanteService
{
   //Docente
    public List<VacanteDTO> ConseguirVacantesDisponibles(PostulacionDocenteContext context, string CI);
    public VacanteDTO? ConseguirDetalleVacante(PostulacionDocenteContext context, int vacanteId);
    
    //JefeCarrera
    public List<VacanteJefeCarreraDTO> ConseguirVacantesVigentesJefe(PostulacionDocenteContext context, string CI);
    public List<VacanteJefeCarreraDTO> ConseguirVacanteHistorialJefe(PostulacionDocenteContext context, string CI);
    public bool VacanteValida(NuevaVacanteDTO nuevaVacante);
    public bool CrearVacante(NuevaVacanteDTO nuevaVacante, PostulacionDocenteContext context, out string mensaje);
    // public bool EliminarVacante(int vacanteId, PostulacionDocenteContext context);
    // public bool ModificarVacante(int vacanteId, VacanteDTO datosNuevosVacante, PostulacionDocenteContext context);

}