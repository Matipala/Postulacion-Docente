using System;
using System.Collections.Generic;

namespace PostulacionDocente.ServicesApp.Models;

public partial class JefeCarrera
{
    public int JefeCarreraId { get; set; }

    public int UsuarioId { get; set; }

    public virtual ICollection<Carrera> Carreras { get; } = new List<Carrera>();

    public virtual Usuario Usuario { get; set; } = null!;

    public virtual ICollection<Vacante> Vacantes { get; } = new List<Vacante>();
}
