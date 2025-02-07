export interface NuevaVacante
{
    nombreVacante: string,
    siglaMateria: string,
    descripcionVacante: string,
    fechaInicio: Date,
    fechaFinalizacion: Date,
    jefeCI: string
}


// public class NuevaVacanteDTO
// {
//     public string? NombreVacante { get; set; } = string.Empty;
//     public string SiglaMateria { get; set; } = null!;
//     public string? DescripcionVacante { get; set; } = string.Empty;
//     public DateTime FechaInicio {get; set;}
//     public DateTime FechaFinalizacion {get; set;}
// }