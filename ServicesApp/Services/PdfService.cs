using System.Reflection.Metadata;
using PostulacionDocente.ServicesApp.Models;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using QuestPDF.Previewer;

public class PdfService : IPdfService
{
    public byte[] GenerarPdfDocente(string CI, PostulacionDocenteContext context)
    {
        var docente = (from _docente in context.Docentes
                      join _usuario in context.Usuarios on _docente.UsuarioId equals _usuario.UsuarioId
                      where _usuario.Ci == CI
                      select new DocentePerfilDTO{
                        Nombre = _usuario.Nombre,
                        Telefono = _usuario.NumeroTelefono,
                        Correo = _usuario.Correo,
                        CI = _usuario.Ci,
                        Materia = _docente.Especialidad,
                        Grado = _docente.Grado,
                        AnhosExperiencia = _docente.Experiencia,
                        DescripcionPersonal = _docente.DescripcionPersonal
                      }).FirstOrDefault<DocentePerfilDTO>();


        var documento = QuestPDF.Fluent.Document.Create(container => {
            container.Page(page =>
            {
                page.MarginHorizontal(40);
                page.MarginVertical(60);

                page.Header()
                    .Height(60)
                    .Background(Colors.Grey.Lighten1)
                    .AlignCenter()
                    .AlignMiddle()
                    .Text("Curriculum");

                page.Content()
                    .Background(Colors.Grey.Lighten2)
                    .Text(text => 
                    {
                        text.Line($"Nombre: {docente?.Nombre}");
                        text.Line($"CI: {docente?.CI}");
                        text.Line($"Numero: {docente?.Telefono}");
                        text.Line($"Correo: {docente?.Correo}");
                        text.Line($"Grado: {docente?.Grado}");
                        text.Line($"Años de experiencia: {docente?.AnhosExperiencia}");
                        text.Line($"Especialidad: {docente?.Materia}");
                        text.Line($"Descripcion personal: {docente?.DescripcionPersonal}");
                    });

                page.Footer()
                    .Height(30)
                    .Background(Colors.Grey.Lighten1)
                    .AlignCenter()
                    .AlignMiddle()
                    .Text("Curriculum generado automaticamente por la app");
            });
        });

        using var stream = new MemoryStream();
        documento.GeneratePdf(stream);

        return stream.ToArray();
    }
}