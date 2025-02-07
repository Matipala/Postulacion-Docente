using System;
using System.Collections.Generic;

namespace PostulacionDocente.ServicesApp.Models;

public partial class Carrera
{
    public int CarreraId { get; set; }

    public string NombreCarrera { get; set; } = null!;

    public string Sigla { get; set; } = null!;

    public int? JefeCarreraId { get; set; }

    public virtual JefeCarrera? JefeCarrera { get; set; }

    public virtual ICollection<Materium> Materia { get; } = new List<Materium>();
}
