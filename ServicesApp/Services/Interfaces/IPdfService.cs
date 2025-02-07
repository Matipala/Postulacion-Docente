
using PostulacionDocente.ServicesApp.Models;

public interface IPdfService
{
    public byte[] GenerarPdfDocente(string CI, PostulacionDocenteContext context);
    
}