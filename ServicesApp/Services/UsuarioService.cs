using System.Net.Mime;
using Microsoft.EntityFrameworkCore;
using PostulacionDocente.ServicesApp.Models;

public class UsuarioService : IUsuarioService
{
  
    public bool LoginDocente(LoginUsuarioDTO credenciales, PostulacionDocenteContext context, out string mensaje, out string usuarioCI)
    {
        mensaje = "Usuario autenticado";
        usuarioCI = "-1";

        if (credenciales == null)
        {
            mensaje = "Hubo un error, las credenciales son nulas";
            return false;
        }

        var usuario = (from _usuario in context.Usuarios
                       join _docente in context.Docentes on _usuario.UsuarioId equals _docente.UsuarioId
                       where _usuario.Correo == credenciales.Email && _usuario.Contrasenha == credenciales.Password
                       select _usuario).FirstOrDefault<Usuario>();


        if (usuario == null)
        {
            mensaje = "Credenciales invalidas o el usuario no se encuentra registrado como docente.";
            return false;
        }

        usuarioCI = usuario.Ci;
        return true;
    }



    public bool LoginJefeCarrera(LoginUsuarioDTO credenciales, PostulacionDocenteContext context, out string mensaje, out string usuarioCI)
    {
        mensaje = "Usuario autenticado";
        usuarioCI= "-1";
        if (credenciales == null)
        {
            mensaje = "Hubo un error, las credenciales son nulas";
            return false;
        }

        var usuario = (from _usuario in context.Usuarios
                        join _jefeCarrera in context.JefeCarreras on _usuario.UsuarioId equals _jefeCarrera.UsuarioId
                        where _usuario.Correo == credenciales.Email && _usuario.Contrasenha == credenciales.Password
                        select _usuario).FirstOrDefault<Usuario>();


        if(usuario == null)
        {
            mensaje = "Credenciales invalidas o el usuario no se encuentra registrado como jefe de carrera.";
            return false;
        }

        usuarioCI= usuario.Ci;
        return true;
    }


    public bool CambiarDatosDocente(DocenteNuevosDatosDTO nuevosDatosDocente, PostulacionDocenteContext context, out string mensaje)
    {
        mensaje = "Datos modificados exitosamente";

        var docente = (from _docente in context.Docentes
                      join _usuario in context.Usuarios on _docente.UsuarioId equals _usuario.UsuarioId
                      where _usuario.Ci == nuevosDatosDocente.CI
                      select _docente).Include(d => d.Usuario).FirstOrDefault<Docente>();

        if(docente == null)
        {
            mensaje = "Hubo un error, no pudimos encontrar al usuario";
            return false;
        }
        else if(docente.Usuario.Contrasenha != nuevosDatosDocente.ContrasenhaActual)
        {
            mensaje = "La contrasenha actual del usuario es incorrecta";
            return false;
        }
        
        //Si el docente quiere mantener su numero de telefono o su correo, solo se agarra los numeros y correos diferentes al del docente
        HashSet<string> telefonos = context.Usuarios.Select(usuario => usuario.NumeroTelefono).Where(telefono => telefono != docente.Usuario.NumeroTelefono).ToHashSet();
        HashSet<string> correos = context.Usuarios.Select(usuario => usuario.Correo).Where(correo => correo != docente.Usuario.Correo).ToHashSet();

        if(telefonos.Contains(nuevosDatosDocente.NuevoTelefono))
        {
            mensaje = "El numero de telefono ya esta siendo ocupado";
            return false;
        }
        else if(correos.Contains(nuevosDatosDocente.NuevoCorreo))
        {
            mensaje = "El correo ya esta siendo ocupado por otro usuario";
            return false;
        }

        docente.Usuario.Nombre = nuevosDatosDocente.NuevoNombre;
        docente.Usuario.NumeroTelefono = nuevosDatosDocente.NuevoTelefono;
        docente.Usuario.FechaNacimiento = nuevosDatosDocente.NuevaFechaNacimiento;
        docente.Usuario.Correo = nuevosDatosDocente.NuevoCorreo;
        docente.Especialidad = nuevosDatosDocente.NuevaMateria;
        docente.Grado = nuevosDatosDocente.NuevoGrado;
        docente.Experiencia = nuevosDatosDocente.NuevoAnhosExperiencia;
        docente.Usuario.Contrasenha = nuevosDatosDocente.NuevaContrasena;

        context.SaveChanges();
        return true;
    }


    public bool CambiarDatosJefe(JefeCarreraNuevosDatosDTO nuevosDatosJefe, PostulacionDocenteContext context, out string mensaje)
    {
        mensaje = "Datos cambiados correctamente";

        var jefeCarrera = (from _jefeCarrera in context.JefeCarreras
                          join _usuario in context.Usuarios on _jefeCarrera.UsuarioId equals _usuario.UsuarioId
                          where _usuario.Ci == nuevosDatosJefe.CI
                          select _jefeCarrera).Include(jefe => jefe.Usuario).FirstOrDefault<JefeCarrera>();

        if(jefeCarrera == null)
        {
            mensaje = "Hubo un error al cambiar sus datos. Intentelo otra vez";
            return false;
        }
        else if(jefeCarrera.Usuario.Contrasenha != nuevosDatosJefe.ContrasenhaActual)
        {
            mensaje = "La contrasenha actual del usuario es incorrecta. No podemos cambiar sus datos";
            return false;
        }



        HashSet<string> correos = context.Usuarios.Select(us => us.Correo).Where(correo => correo != jefeCarrera.Usuario.Correo).ToHashSet();
        HashSet<string> telefonos = context.Usuarios.Select(us => us.NumeroTelefono).Where(telefono => telefono != jefeCarrera.Usuario.NumeroTelefono).ToHashSet();


        if(correos.Contains(nuevosDatosJefe.NuevoCorreo))
        {
            mensaje = "Ya existe un usuario con este correo. Intente buscar otra opcion";
            return false;
        }
        else if(telefonos.Contains(nuevosDatosJefe.NuevoNumeroTelefono))
        {
            mensaje = "El numero de telefono ya esta siendo usado por otro usuario. Intente otra opcion";
            return false;
        }



        jefeCarrera.Usuario.Nombre = nuevosDatosJefe.NuevoNombre;
        jefeCarrera.Usuario.Correo = nuevosDatosJefe.NuevoCorreo;
        jefeCarrera.Usuario.FechaNacimiento = nuevosDatosJefe.NuevaFechaNacimiento;
        jefeCarrera.Usuario.NumeroTelefono = nuevosDatosJefe.NuevoNumeroTelefono;
        jefeCarrera.Usuario.Contrasenha = nuevosDatosJefe.NuevaContrasenha;

        context.SaveChanges();

        return true;
    }
}
