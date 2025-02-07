using PostulacionDocente.ServicesApp.Models;

public interface ICarreraService
{
    public List<CarreraSeleccionDTO> GetAllCarrerasDisponibles(PostulacionDocenteContext context);
}