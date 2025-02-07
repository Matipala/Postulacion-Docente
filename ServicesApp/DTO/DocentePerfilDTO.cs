public class DocentePerfilDTO
{
    public string Nombre { get; set; } = string.Empty;
    public string Telefono { get; set; } = string.Empty;
    public string CI { get; set ;} = string.Empty;
    public string Materia { get; set ;} = string.Empty;
    public string? Grado  { get; set; } = string.Empty;
    public string Correo { get; set; } = string.Empty;
    public int? AnhosExperiencia { get; set; }
    public string? DescripcionPersonal { get; set; } = string.Empty;
}