using System;
using System.Collections.Generic;

namespace PostulacionDocente.ServicesApp.Models;

public partial class Usuario
{
    public int UsuarioId { get; set; }

    public string Nombre { get; set; } = null!;

    public string Ci { get; set; } = null!;

    public DateTime? FechaNacimiento { get; set; }

    public string NumeroTelefono { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public string Contrasenha { get; set; } = null!;

    public virtual ICollection<Docente> Docentes { get; } = new List<Docente>();

    public virtual ICollection<JefeCarrera> JefeCarreras { get; } = new List<JefeCarrera>();
}
