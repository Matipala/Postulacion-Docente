using PostulacionDocente.ServicesApp.Models;

public class PostulacionService : IPostulacionService
{
       
    public PostulacionDetallesDTO? ConseguirDetallesPostulacion(PostulacionDocenteContext context, int postulacionId)
    {
        var postulacionDetalle = (from _postulacion in context.Postulacions
                                    join _vacante in context.Vacantes on _postulacion.VacanteId equals _vacante.VacanteId
                                    join _materia in context.Materia on _vacante.MateriaId equals _materia.MateriaId
                                    where _postulacion.PostulacionId == postulacionId
                                    select new PostulacionDetallesDTO {
                                    PostulacionId = _postulacion.PostulacionId,
                                    TituloMateria = _materia.NombreMateria,
                                    Estado = _postulacion.Estado.EstadoId,
                                    DescripcionEstado = _postulacion.Estado.Mensaje,
                                    NombreVacante = _vacante.NombreVacante,
                                    DescripcionVacante = _vacante.Descripcion,
                                    JefeCorreo = _vacante.JefeCarrera.Usuario.Correo,
                                    JefeNombre = _vacante.JefeCarrera.Usuario.Nombre
                                }).FirstOrDefault<PostulacionDetallesDTO>();
        

        return postulacionDetalle;
    }

    public List<PostulacionDetallesDTO> ConseguirPostulacionesVigentes(PostulacionDocenteContext context, string CI)
    {
        var docenteId = (from _usuario in context.Usuarios
                        join _docente in context.Docentes on _usuario.UsuarioId equals _docente.UsuarioId
                        where _usuario.Ci == CI
                        select _docente.DocenteId).FirstOrDefault<int>();

        var postulaciones = (from _postulacion in context.Postulacions
                            join _vacante in context.Vacantes on _postulacion.VacanteId equals _vacante.VacanteId
                            join _materia in context.Materia on _vacante.MateriaId equals _materia.MateriaId
                            where _postulacion.DocenteId == docenteId && _postulacion.EstadoId != 5 && _postulacion.EstadoId != 4 && _vacante.FechaFin > DateTime.Now
                            select new PostulacionDetallesDTO {
                                PostulacionId = _postulacion.PostulacionId,
                                TituloMateria = _materia.NombreMateria,
                                Estado = _postulacion.Estado.EstadoId,
                                DescripcionEstado = _postulacion.Estado.Mensaje,
                                NombreVacante = _vacante.NombreVacante,
                                DescripcionVacante = _vacante.Descripcion,
                                JefeCorreo = _vacante.JefeCarrera.Usuario.Correo,
                                JefeNombre = _vacante.JefeCarrera.Usuario.Nombre
                            }).ToList();
        

        return postulaciones;
                            
    }

    public List<PostulacionDetallesDTO> ConseguirPostulacionesHistorial(PostulacionDocenteContext context, string CI)
    {
        var docenteId = (from _docente in context.Docentes
                         where _docente.Usuario.Ci == CI
                         select _docente.DocenteId).FirstOrDefault<int>();
        

        var postulaciones = (from _postulacion in context.Postulacions
                             where _postulacion.DocenteId == docenteId && (_postulacion.EstadoId == 4 || _postulacion.EstadoId == 5 || _postulacion.Vacante.FechaFin <= DateTime.Now)
                             select new PostulacionDetallesDTO {
                                PostulacionId = _postulacion.PostulacionId,
                                TituloMateria = _postulacion.Vacante.Materia.NombreMateria,
                                Estado = _postulacion.Estado.EstadoId,
                                DescripcionEstado = _postulacion.Estado.Mensaje,
                                NombreVacante = _postulacion.Vacante.NombreVacante,
                                DescripcionVacante = _postulacion.Vacante.Descripcion
                             }).ToList<PostulacionDetallesDTO>();

        return postulaciones;
    }
}
