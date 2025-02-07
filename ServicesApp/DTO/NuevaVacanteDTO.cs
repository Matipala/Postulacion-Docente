public class NuevaVacanteDTO
{
    public string NombreVacante { get; set; } = string.Empty;
    public string SiglaMateria { get; set; } = null!;
    public string? DescripcionVacante { get; set; } = string.Empty;
    public DateTime FechaInicio {get; set;}
    public DateTime FechaFinalizacion {get; set;}
    public string JefeCI { get; set; } = null!;
}