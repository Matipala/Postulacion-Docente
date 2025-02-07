
using PostulacionDocente.ServicesApp.Models;

public class CarreraService : ICarreraService
{
    public List<CarreraSeleccionDTO> GetAllCarrerasDisponibles(PostulacionDocenteContext context)
    {
        List<CarreraSeleccionDTO> carrerasDisponibles = (from _carreras in context.Carreras
                                                        where _carreras.JefeCarreraId == null
                                                        select new CarreraSeleccionDTO{Sigla = _carreras.Sigla, NombreCarrera = _carreras.NombreCarrera}).ToList();
        

        return carrerasDisponibles;

    }
}