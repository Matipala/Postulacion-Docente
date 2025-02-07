public class PostulacionDetallesDTO
{
    public int PostulacionId { get; set; }
    public string TituloMateria { get; set; } = string.Empty;
    public int Estado { get; set; }
    public string DescripcionEstado { get; set; } = string.Empty;
    public string NombreVacante { get; set; } = string.Empty;
    public string? DescripcionVacante { get; set; } = string.Empty;
    public string? JefeCorreo  { get; set ;} = string.Empty;
    public string? JefeNombre { get; set ;} = string.Empty;

    /*
    Los estados son:
     1: Enviado y por ser revisado
     2: 2da fase, exposición y puntuación
     3: 3ra fase, entrevista final
     4: Aceptada, el postulante ya es contratado
     5: Rechazado
    */
}