public class JefeCarreraNuevosDatosDTO
{
    public string NuevoNombre { get; set; } = null!;
    public string NuevoCorreo { get; set; } = null!;
    public string NuevoNumeroTelefono { get; set; } = null!;
    public DateTime NuevaFechaNacimiento { get; set; }
    public string NuevaContrasenha { get; set; } = null!;
    public string ContrasenhaActual { get; set; } = null!;
    public string CI { get; set; } = null!;

}

//  nuevoNombre: cambiarDatosJefeForm.value.nuevoNombre,
//             nuevoCorreo: cambiarDatosJefeForm.value.nuevoCorreo,
//             nuevoNumeroTelefono: cambiarDatosJefeForm.value.nuevoNumeroTelefono,
//             nuevaFechaNacimiento: cambiarDatosJefeForm.value.nuevaFechaNacimiento,
//             nuevaContrasenha: cambiarDatosJefeForm.value.nuevaContrasenha,
//             contrasenhaActual: cambiarDatosJefeForm.value.contrasenhaActual,