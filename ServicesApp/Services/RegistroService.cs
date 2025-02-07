using System.Reflection;
using PostulacionDocente.ServicesApp.Models;

public class RegistroService : IRegistroService
{
    public bool CredencialesUsoUsuario(string correo, string CI, string numeroTelefono, PostulacionDocenteContext context)
    {
        var usuario = (from _usuario in context.Usuarios
                        where _usuario.Correo == correo || _usuario.Ci == CI || _usuario.NumeroTelefono == numeroTelefono
                        select _usuario).FirstOrDefault<Usuario>();

        if(usuario != null)
        {
            return true;
        }

        return false;
    }
    public bool CredencialesEnUsoDocente(DocenteRegistroDTO docente, PostulacionDocenteContext context)
    {
       //Verficamos que tambien no exista un numero de celular ya existente
       return CredencialesUsoUsuario(docente.Correo, docente.CI, docente.Telefono, context);
    }

    public bool CredencialesEnUsoJefeCarrera(JefeCarreraRegistroDTO jefeCarrera, PostulacionDocenteContext context)
    {
        if(CredencialesUsoUsuario(jefeCarrera.Correo, jefeCarrera.CI, jefeCarrera.Telefono, context))
        {
            return true;
        }

       
       var carreraEnUso = (from _carrera in context.Carreras
                            where jefeCarrera.Carreras.Contains(_carrera.Sigla)
                            select _carrera.JefeCarreraId).FirstOrDefault();


        if(carreraEnUso != null)
        {
            return true;
        }


        return false;
    }

    public bool RegistrarDocente(DocenteRegistroDTO nuevoDocente, PostulacionDocenteContext context, out string mensaje)
    {
        mensaje = "Docente registrado correctamente";
        if(CredencialesEnUsoDocente(nuevoDocente, context))
        {
            mensaje = "El email, el numero de telefono o el carnet de identidad ya esta en uso. Intentalo otra vez";
            return false;
        }
        

        var usuario = new Usuario{
            Nombre = nuevoDocente.Nombre,
            Ci = nuevoDocente.CI,
            FechaNacimiento = nuevoDocente.FechaNacimiento,
            NumeroTelefono = nuevoDocente.Telefono,
            Correo = nuevoDocente.Correo,
            Contrasenha = nuevoDocente.Contrasenha
        };

        var docente  = new Docente
        {
            Especialidad = nuevoDocente.Materia,
            Experiencia = nuevoDocente.AnhosExperiencia,
            DescripcionPersonal = nuevoDocente.DescripcionPersonal,
            Grado = nuevoDocente.Grado,
            Usuario = usuario
        };


        context.Docentes.Add(docente);
        context.SaveChanges();

        return true;
    }

    public bool RegistrarJefeCarrera(JefeCarreraRegistroDTO jefeCarrera, PostulacionDocenteContext context, out string mensaje)
    {
        mensaje = "Jefe registrado correctamente";
        if(CredencialesEnUsoJefeCarrera(jefeCarrera, context))
        {
            mensaje = "El email, el numero de telefono o el carnet de identidad ya esta en uso. Intentalo otra vez";
            return false;
        }


        var usuario = new Usuario{
            Nombre = jefeCarrera.Nombre,
            Ci = jefeCarrera.CI,
            FechaNacimiento = jefeCarrera.FechaNacimiento,
            NumeroTelefono = jefeCarrera.Telefono,
            Correo = jefeCarrera.Correo,
            Contrasenha = jefeCarrera.Contrasenha
        };

        // Carrera? carrera = context.Carreras.FirstOrDefault(c => c.CarreraId == jefeCarrera.CarreraId);
        List<Carrera> carreras = context.Carreras.Where(carrera => jefeCarrera.Carreras.Contains(carrera.Sigla)).ToList();

        if(carreras.Count <= 0)
        {
            mensaje = "Hubo un error al selecccionar las carreras. Intentelo otra vez";
            return false;
        }

        var jefeCarreraDB = new JefeCarrera
        {
            Usuario = usuario
        };

        foreach(var carrera in carreras)
        {
            jefeCarreraDB.Carreras.Add(carrera);
        }

        context.JefeCarreras.Add(jefeCarreraDB);
        context.SaveChanges();

        return true;
    }
}