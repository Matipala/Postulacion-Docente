using Microsoft.EntityFrameworkCore;
using PostulacionDocente.ServicesApp.Models;
using QuestPDF.Infrastructure;



//using PostulacionDocente.Services;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddScoped<IPostulacionService, PostulacionService>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<IDocenteService, DocenteService>();
builder.Services.AddScoped<IVacanteService, VacanteService>();
builder.Services.AddScoped<IJefeCarreraService, JefeCarreraService>();
builder.Services.AddScoped<IPdfService, PdfService>();
builder.Services.AddScoped<IRegistroService, RegistroService>();
builder.Services.AddScoped<IMateriaService, MateriaService>();
builder.Services.AddScoped<ICarreraService, CarreraService>();

builder.Services.AddDbContext<PostulacionDocenteContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default"))
);

QuestPDF.Settings.License = LicenseType.Community;


var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var serviceProvider = scope.ServiceProvider;
   
}

if (!app.Environment.IsDevelopment())
{

}

app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
