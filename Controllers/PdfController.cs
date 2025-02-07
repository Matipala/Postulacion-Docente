
using Microsoft.AspNetCore.Mvc;
using PostulacionDocente.ServicesApp.Models;

[ApiController]
[Route("[controller]")]

public class PdfController : ControllerBase
{
    private readonly IPdfService _pdfService;
    private readonly PostulacionDocenteContext _context;
    public PdfController(IPdfService pdfService, PostulacionDocenteContext context)
    {
        _pdfService = pdfService;
        _context = context;
    }

    [HttpGet("generarPdf/{ci}")]  
    public IActionResult GenerarPdf(string ci)
    {
        var pdfBytes = _pdfService.GenerarPdfDocente(ci, _context);
    
        return File(pdfBytes, "application/pdf");
    }
}