public class JefeCarreraRegistroDTO
{
    public string Nombre { get; set; } = string.Empty;
    public string Telefono { get; set; } = string .Empty;
    public string CI { get; set; } = string.Empty;
    public DateTime FechaNacimiento { get; set; }
    public string Correo { get; set; } = string.Empty;
    public string Contrasenha { get; set; } = string.Empty;
    public List<string> Carreras { get; set; } = null!;
}