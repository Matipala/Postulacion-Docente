public class DocenteDatosPostulacionDTO
{
    public int PostulacionId { get; set ;}
    public string NombrePostulante { get; set; } = string.Empty;
    public string Telefono { get; set; } = string.Empty;
    public string CI { get; set; } = null!;
    public string Materia { get; set; } = string.Empty;
    public string? Grado { get; set; } = string.Empty;
    public string Correo { get; set; } = null!;
    public string DescripcionEstado { get; set; } = string.Empty;
    public string? DescripcionDocente { get; set ;} = string.Empty;
    public int EstadoId  { get; set ;}
}