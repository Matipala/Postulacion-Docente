using System;
using System.Collections.Generic;

namespace PostulacionDocente.ServicesApp.Models;

public partial class Vacante
{
    public int VacanteId { get; set; }

    public string NombreVacante { get; set; } = null!;

    public string? Descripcion { get; set; }

    public DateTime FechaInicio { get; set; }

    public DateTime FechaFin { get; set; }

    public int MateriaId { get; set; }

    public int JefeCarreraId { get; set; }

    public virtual JefeCarrera JefeCarrera { get; set; } = null!;

    public virtual Materium Materia { get; set; } = null!;

    public virtual ICollection<Postulacion> Postulacions { get; } = new List<Postulacion>();
}
