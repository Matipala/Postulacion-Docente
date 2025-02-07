import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';



@Injectable()
export class UsuarioService {
    
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl : string) { }

    registrarDocente(registroDocenteForm: FormGroup){
        const docenteDatos = {
            nombre: registroDocenteForm.value.nombre,
            telefono: registroDocenteForm.value.telefono,
            ci: registroDocenteForm.value.ci,
            fechaNacimiento: registroDocenteForm.value.fechaNacimiento,
            descripcionPersonal: registroDocenteForm.value.descripcionPersonal,
            materia: registroDocenteForm.value.especialidad,
            grado: registroDocenteForm.value.grado,
            anhosExperiencia: registroDocenteForm.value.anhosExperiencia,
            correo: registroDocenteForm.value.correo,
            contrasenha: registroDocenteForm.value.contrasenha
        };

        return this.http.post<any>(this.baseUrl + 'usuario/registrarDocente', docenteDatos);
    }

    // public string Nombre{get; set;} = string.Empty;
    // public string Telefono{get; set;} = string.Empty;
    // public string CI{get; set;} = string.Empty;
    // public DateTime FechaNacimiento{get; set;}
    // public string DescripcionPersonal { get; set; } = string.Empty;
    // public string Materia{get; set;} = string.Empty;
    // public string Grado{get; set;} = string.Empty;
    // public int AnhosExperiencia{get; set;}
    // public string Correo{get; set;} = string.Empty;
    // public string Contrasenha{get; set;} = string.Empty;

    // nombre: ['', Validators.required],
    // telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    // ci: ['', Validators.required],
    // fechaNacimiento: ['', Validators.required],
    // descripcionPersonal: ['', Validators.required],
    // especialidad: ['', Validators.required],
    // grado: ['', Validators.required],
    // anosExperiencia: ['', [Validators.required, Validators.min(1)]],
    // correo: ['', [Validators.required, Validators.email]],
    // contrasena: ['', [Validators.required, Validators.minLength(4)]],
    // contrasenaRep: ['', [Validators.required, Validators.minLength(4)]],


    registrarJefe(registroJefeForm: FormGroup){
        const jefeDatos = {
            nombre: registroJefeForm.value.nombre,
            telefono: registroJefeForm.value.telefono,
            ci: registroJefeForm.value.ci,
            fechaNacimiento: registroJefeForm.value.fechaNacimiento,
            correo: registroJefeForm.value.correo,
            contrasenha: registroJefeForm.value.contrasenha,
            carreras: registroJefeForm.value.carreras
        };

        return this.http.post<any>(this.baseUrl + 'usuario/registrarJefeCarrera', jefeDatos);
    }


   
    


}
