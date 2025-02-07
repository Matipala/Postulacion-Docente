using PostulacionDocente.ServicesApp.Models;

public interface IMateriaService
{
    public List<MateriaDTO> conseguirMaterias(PostulacionDocenteContext context);
    public List<CarreraMateriasDTO> ConseguirMateriasPorCarrera(PostulacionDocenteContext context);
    public List<MateriaDTO> ConseguirMateriasJefeCarrera(PostulacionDocenteContext context, string CI);
}