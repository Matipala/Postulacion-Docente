using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using PostulacionDocente.ServicesApp.Models;

public class VacanteService : IVacanteService
{
    // public bool EliminarVacante(int vacanteId, PostulacionDocenteContext context)
    // {
    //     System.Console.WriteLine($"La vacante con Id {vacanteId} ha sido eliminada");
    //     return true;
    // }
    // public bool ModificarVacante(int vacanteId, VacanteDTO datosNuevosVacante, PostulacionDocenteContext context)
    // {
    //     System.Console.WriteLine($"La vacante con el id {vacanteId} ha sido modificada");
    //     return true;
    // }

    public List<VacanteDTO> ConseguirVacantesDisponibles(PostulacionDocenteContext context, string CI)
    {
      
        DateTime now = DateTime.Now;

        var docenteId = (from _usuario in context.Usuarios
                        join _docente in context.Docentes on _usuario.UsuarioId equals _docente.UsuarioId
                        where _usuario.Ci == CI
                        select _docente.DocenteId).FirstOrDefault<int>();

        var vacantesDisponibles = (from _vacante in context.Vacantes
                                  where now < _vacante.FechaFin && now >= _vacante.FechaInicio && (_vacante.Postulacions.Count == 0 || !_vacante.Postulacions.Any(p => p.EstadoId == 4 || p.DocenteId == docenteId))
                                  select new VacanteDTO{
                                    VacanteId = _vacante.VacanteId,
                                    NombreVacante = _vacante.NombreVacante,
                                    Materia = _vacante.Materia.NombreMateria,
                                    DescripcionVacante = _vacante.Descripcion,
                                    FechaInicio = _vacante.FechaInicio,
                                    FechaFinalizacion = _vacante.FechaFin
                                  }).ToList();


        return vacantesDisponibles;
    }

    public bool CrearVacante(NuevaVacanteDTO nuevaVacante, PostulacionDocenteContext context, out string mensaje)
    {
        mensaje = "Vacante creada correctamente";
        if(!this.VacanteValida(nuevaVacante))
        {
            mensaje = "Los datos de la vacante no son validas. Intentalo otra vez";
            return false;
        }

        Materium? materia = context.Materia.FirstOrDefault(mat => mat.Sigla == nuevaVacante.SiglaMateria);
        JefeCarrera? jefeCarrera = (from _jefeCarrera in context.JefeCarreras
                                   join _usuario in context.Usuarios on _jefeCarrera.UsuarioId equals _usuario.UsuarioId
                                   where _usuario.Ci == nuevaVacante.JefeCI
                                   select _jefeCarrera).FirstOrDefault<JefeCarrera>();
    
        if(materia == null || jefeCarrera == null)
        {
            mensaje = "Hubo un error al crear la vacante. Intentalo otra vez";
            return false;
        }

        Vacante nuevaVac = new Vacante{
            NombreVacante = nuevaVacante.NombreVacante,
            Descripcion = nuevaVacante.DescripcionVacante,
            FechaInicio = nuevaVacante.FechaInicio,
            FechaFin = nuevaVacante.FechaFinalizacion,
            JefeCarrera = jefeCarrera,
            Materia = materia
        };

        context.Vacantes.Add(nuevaVac);
        context.SaveChanges();
        return true;
    }


    public bool VacanteValida(NuevaVacanteDTO nuevaVacante)
    {
         if(nuevaVacante == null)
        {
            return false;
        }

        if(string.IsNullOrEmpty(nuevaVacante.NombreVacante) || string.IsNullOrEmpty(nuevaVacante.SiglaMateria)|| string.IsNullOrEmpty(nuevaVacante.DescripcionVacante))
        {
            return false;
        }


        if(nuevaVacante.FechaInicio > nuevaVacante.FechaFinalizacion){
            return false;
        }

        return true;
    }


    public VacanteDTO? ConseguirDetalleVacante(PostulacionDocenteContext context, int vacanteId)
    {
        var vacante = (from _vacante in context.Vacantes
                      where _vacante.VacanteId == vacanteId
                      select new VacanteDTO{
                        VacanteId = _vacante.VacanteId,
                        NombreVacante = _vacante.NombreVacante,
                        Materia = _vacante.Materia.NombreMateria,
                        DescripcionVacante = _vacante.Descripcion,
                        FechaInicio = _vacante.FechaInicio,
                        FechaFinalizacion = _vacante.FechaFin
                      }).FirstOrDefault<VacanteDTO>();

        return vacante;
    }

    public List<VacanteJefeCarreraDTO> ConseguirVacantesVigentesJefe(PostulacionDocenteContext context, string CI)
    {
        var jefeCarrera = (from _jefeCarrera in context.JefeCarreras
                          join _usuario in context.Usuarios on _jefeCarrera.UsuarioId equals _usuario.UsuarioId
                          where _usuario.Ci == CI
                          select _jefeCarrera).FirstOrDefault<JefeCarrera>();

        if(jefeCarrera == null)
        {
            return new List<VacanteJefeCarreraDTO>();
        }

        var jefeCarreraId = jefeCarrera.JefeCarreraId;

        var vacantes = (from _vacante in context.Vacantes
                       where _vacante.JefeCarreraId == jefeCarreraId && _vacante.FechaFin > DateTime.Now && !_vacante.Postulacions.Any(postulacion => postulacion.EstadoId == 4)
                       select new VacanteJefeCarreraDTO{
                        VacanteId = _vacante.VacanteId,
                        NombreVacante = _vacante.NombreVacante,
                        NombreMateria = _vacante.Materia.NombreMateria,
                        DescripcionVacante = _vacante.Descripcion,
                        NumeroPostulantes = _vacante.Postulacions.Count
                       }).ToList();


        return vacantes;
    }

    public List<VacanteJefeCarreraDTO> ConseguirVacanteHistorialJefe(PostulacionDocenteContext context, string CI)
    {
        var jefeCarrera = (from _jefeCarrera in context.JefeCarreras
                          where _jefeCarrera.Usuario.Ci == CI
                          select _jefeCarrera).FirstOrDefault<JefeCarrera>();

        if(jefeCarrera == null)
        {
            return new List<VacanteJefeCarreraDTO>();
        }


        var vacantes = (from _vacante in context.Vacantes
                        where _vacante.JefeCarreraId == jefeCarrera.JefeCarreraId && (_vacante.FechaFin <= DateTime.Now || _vacante.Postulacions.Any(pos => pos.EstadoId == 4))
                        select new VacanteJefeCarreraDTO {
                            VacanteId = _vacante.VacanteId,
                            NombreVacante = _vacante.NombreVacante,
                            NombreMateria = _vacante.Materia.NombreMateria,
                            DescripcionVacante = _vacante.Descripcion,
                            NumeroPostulantes = _vacante.Postulacions.Count
                        }).ToList<VacanteJefeCarreraDTO>();
        

        return vacantes;
    }
}