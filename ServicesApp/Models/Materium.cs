using System;
using System.Collections.Generic;

namespace PostulacionDocente.ServicesApp.Models;

public partial class Materium
{
    public int MateriaId { get; set; }

    public string NombreMateria { get; set; } = null!;

    public string Sigla { get; set; } = null!;

    public virtual ICollection<Vacante> Vacantes { get; } = new List<Vacante>();

    public virtual ICollection<Carrera> Carreras { get; } = new List<Carrera>();
}
