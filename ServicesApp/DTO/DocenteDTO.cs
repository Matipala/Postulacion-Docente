public class DocenteDTO : UsuarioDTO{
    public string? materia /*especialidad*/ {get;set;} //qué campo de la docencia enseña
    public int experiencia {get;set;} //años de experiencia
    public string? grado {get;set;} //licenciado? Ingeniero? Doctorado?
}