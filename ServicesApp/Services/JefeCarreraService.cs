using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using PostulacionDocente.ServicesApp.Models;

public class JefeCarreraService : IJefeCarreraService
{

    public bool AscenderSolicitud(PostulacionDocenteContext context, int postulacionId, out string mensaje)
    {
        mensaje = "Postulación ascendida correctamente";
        var postulacion = (from _postulacion in context.Postulacions
                           where _postulacion.PostulacionId == postulacionId
                           select _postulacion)
                            .Include(p => p.Vacante)
                            .Include(p => p.Vacante.Postulacions)
                            .FirstOrDefault();

        if (postulacion == null || postulacion.EstadoId >= 4)
        {
            mensaje = "Hubo un error, no hemos podido ascendir la postulación. Intentalo otra vez";
            return false;
        }

        //aqui combinamos lo que seria el paso 2 y 3 entrevista y aceptacion en un solo paso
        if (postulacion.EstadoId == 2 || postulacion.EstadoId == 3) //aqui entrevista = 2 y aceptacion = 3   
        {
            postulacion.EstadoId = 4; //este seria el nuevo estado que representa "entrevista + aceptacion"
            mensaje = "La postulación ha avanzado a exposicion y entrevista combinadas";

        }
        else
        {
            postulacion.EstadoId = postulacion.EstadoId + 1; // esto hara que sino esta en entrevista y aceptacion seguir normal
        }
        context.SaveChanges();
        return true;
    }

    // public bool DescenderSolicitud(PostulacionDocenteContext context, int postulacionId, out string mensaje)
    // {
    //     mensaje = "Postulación descendida correctamente";
    //     var postulacion = (from _postulacion in context.Postulacions
    //                        where _postulacion.PostulacionId == postulacionId
    //                        select _postulacion)
    //                         .Include(p => p.Vacante)
    //                         .Include(p => p.Vacante.Postulacions)
    //                         .FirstOrDefault();
    //     if (postulacion == null || postulacion.EstadoId <= 1) // 1 seria el estado mas bajo
    //     {
    //         mensaje = "Hubo un error, no hemos podido descender la postulación. Intentalo otra vez";
    //         return false;
    //     }
    //     // con esto reducimos el estado de la postulacion
    //     postulacion.EstadoId = postulacion.EstadoId - 1;

    //     context.SaveChanges();
    //     return true;
    // }


    public bool RechazarSolicitud(PostulacionDocenteContext context, int postulacionId, out string mensaje)
    {
        mensaje = "El proceso se ha realizado correctamente";

        var postulacion = context.Postulacions.FirstOrDefault(p => p.PostulacionId == postulacionId);

        if (postulacion == null)
        {
            mensaje = "Hubo un error al rechazar la postulacion. Intentelo otra vez";
            return false;
        }

        postulacion.EstadoId = 5; // Postulacion Rechazada

        context.SaveChanges();
        return true;
    }


    public void RechazarPostulaciones(PostulacionDocenteContext context, int postulacionAceptadaId, Vacante vacante)
    {
        foreach (var postulacion in vacante.Postulacions)
        {
            if (postulacion.PostulacionId == postulacionAceptadaId) continue;

            postulacion.EstadoId = 5; //Rechazado
        }

        context.SaveChanges();
    }

    // Nuevos métodos implementados para obtener listas
    public List<DocenteDatosPostulacionDTO> ObtenerSolicitudes(PostulacionDocenteContext context, int vacanteId)
    {
        var solicitudes = (from _postulacion in context.Postulacions
                           where _postulacion.VacanteId == vacanteId
                           select new DocenteDatosPostulacionDTO
                           {
                               PostulacionId = _postulacion.PostulacionId,
                               NombrePostulante = _postulacion.Docente.Usuario.Nombre,
                               Telefono = _postulacion.Docente.Usuario.NumeroTelefono,
                               CI = _postulacion.Docente.Usuario.Ci,
                               Materia = _postulacion.Docente.Especialidad,
                               Grado = _postulacion.Docente.Grado,
                               Correo = _postulacion.Docente.Usuario.Correo,
                               DescripcionEstado = _postulacion.Estado.Mensaje,
                               DescripcionDocente = _postulacion.Docente.DescripcionPersonal,
                               EstadoId = _postulacion.Estado.EstadoId
                           }).ToList();


        return solicitudes;
    }

    public JefeCarreraPerfilDTO? ConseguirDatosJefeCarrera(PostulacionDocenteContext context, string CI)
    {
        var jefeCarrera = (from _jefeCarrera in context.JefeCarreras
                           join _usuario in context.Usuarios on _jefeCarrera.UsuarioId equals _usuario.UsuarioId
                           where _usuario.Ci == CI
                           select new JefeCarreraPerfilDTO
                           {
                               Nombre = _usuario.Nombre,
                               Correo = _usuario.Correo,
                               FechaNacimiento = _usuario.FechaNacimiento,
                               NumeroTelefono = _usuario.NumeroTelefono,
                               Carreras = _jefeCarrera.Carreras.Select(carrera => carrera.NombreCarrera).ToList()
                           }).FirstOrDefault<JefeCarreraPerfilDTO>();


        return jefeCarrera;
    }


    public DocenteDatosPostulacionDTO? RevisarPostulacion(PostulacionDocenteContext context, int postulacionId)
    {
        var postulacionDetalles = (from _postulacion in context.Postulacions
                                   where _postulacion.PostulacionId == postulacionId
                                   select new DocenteDatosPostulacionDTO
                                   {
                                       PostulacionId = _postulacion.PostulacionId,
                                       NombrePostulante = _postulacion.Docente.Usuario.Nombre,
                                       Telefono = _postulacion.Docente.Usuario.NumeroTelefono,
                                       CI = _postulacion.Docente.Usuario.Ci,
                                       Materia = _postulacion.Docente.Especialidad,
                                       Grado = _postulacion.Docente.Grado,
                                       Correo = _postulacion.Docente.Usuario.Correo,
                                       DescripcionEstado = _postulacion.Estado.Mensaje,
                                       DescripcionDocente = _postulacion.Docente.DescripcionPersonal,
                                       EstadoId = _postulacion.Estado.EstadoId
                                   }).FirstOrDefault<DocenteDatosPostulacionDTO>();


        return postulacionDetalles;
    }

}