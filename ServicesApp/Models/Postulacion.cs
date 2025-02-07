using System;
using System.Collections.Generic;

namespace PostulacionDocente.ServicesApp.Models;

public partial class Postulacion
{
    public int PostulacionId { get; set; }

    public int EstadoId { get; set; }

    public int DocenteId { get; set; }

    public int VacanteId { get; set; }

    public virtual Docente Docente { get; set; } = null!;

    public virtual Estado Estado { get; set; } = null!;

    public virtual Vacante Vacante { get; set; } = null!;
}
