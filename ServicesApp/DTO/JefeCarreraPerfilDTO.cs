public class JefeCarreraPerfilDTO
{
    public string Nombre { get; set; } = string.Empty;
    public string Correo { get; set ;} = string.Empty;
    public DateTime? FechaNacimiento { get; set; }
    public string NumeroTelefono { get; set; } = null!;
    public List<string>? Carreras { get; set; }
}