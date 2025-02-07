public class PostulacionDTO
{
    public int PostulacionId { get; set; }
    public int DocenteId { get; set; }
    public int Estado {get;set;}

    /*
    Los estados son:
     1: Enviado y por ser revisado
     2: 2da fase, exposición y puntuación
     3: 3ra fase, entrevista final
     4: Aceptada, el postulante ya es contratado
     5: Rechazado
    */
}