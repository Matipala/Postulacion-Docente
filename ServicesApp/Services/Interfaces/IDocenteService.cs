using System.ComponentModel.DataAnnotations.Schema;
using PostulacionDocente.ServicesApp.Models;

public interface IDocenteService{
    public DocentePerfilDTO? ConseguirDetallesDocente(PostulacionDocenteContext context, string usuarioCI);
    public bool Postularse(PostulacionDocenteContext context, NuevaPostulacionDTO nuevaPostulacion, out string mensaje);
}