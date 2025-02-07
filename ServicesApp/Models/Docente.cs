using System;
using System.Collections.Generic;

namespace PostulacionDocente.ServicesApp.Models;

public partial class Docente
{
    public int DocenteId { get; set; }

    public string Especialidad { get; set; } = null!;

    public int? Experiencia { get; set; }

    public string? DescripcionPersonal { get; set; }

    public string? Grado { get; set; }

    public int UsuarioId { get; set; }

    public virtual ICollection<Postulacion> Postulacions { get; } = new List<Postulacion>();

    public virtual Usuario Usuario { get; set; } = null!;
}
