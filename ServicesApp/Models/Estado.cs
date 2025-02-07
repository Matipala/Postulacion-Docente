using System;
using System.Collections.Generic;

namespace PostulacionDocente.ServicesApp.Models;

public partial class Estado
{
    public int EstadoId { get; set; }

    public string Mensaje { get; set; } = null!;

    public virtual ICollection<Postulacion> Postulacions { get; } = new List<Postulacion>();
}
