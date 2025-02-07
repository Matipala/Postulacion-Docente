export interface DocenteNuevosDatos
{
    nuevoNombre: string,
    nuevoTelefono: string,
    nuevaFechaNacimiento: Date,
    nuevoCorreo: string,
    nuevaMateria: string,
    nuevoGrado: string, 
    nuevoAnhosExperiencia: number,
    nuevaContrasena: string,
    contrasenhaActual: string,
    ci: string //Este dato no se puede cambiar ya que es unico para cada usuario
};