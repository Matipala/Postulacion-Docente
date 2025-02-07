import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docente } from '../models/interfaces/docente.interface';
import { FormGroup } from '@angular/forms';
import { DocenteNuevosDatos } from '../models/interfaces/docenteNuevosDatos.enum';
import { Jefe } from '../models/interfaces/jefe.interface';
import { JefeCarreraNuevosDatos } from '../models/interfaces/jefeCarreraNuevosDatos.interface';

@Injectable()
export class PerfilService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl : string) { }

    obtenerDatosDocente(){
        return this.http.get<Docente>(this.baseUrl + "docente/conseguirDatosDocente/" + sessionStorage.getItem('usuarioCI'));
    }

    obtenerDatosJefeCarrera()
    {
        return this.http.get<Jefe>(this.baseUrl + 'jefeCarrera/conseguirDatosJefeCarrera/' + sessionStorage.getItem('usuarioCI'));
    }


    cambiarDatosDocente(cambiarDatosDocenteForm: FormGroup, CI: string)
    {
        const datosDocenteNuevos: DocenteNuevosDatos = {
            nuevoNombre: cambiarDatosDocenteForm.value.nombre,
            nuevoTelefono: cambiarDatosDocenteForm.value.telefono,
            nuevaFechaNacimiento: cambiarDatosDocenteForm.value.fechaNacimiento,
            nuevoCorreo: cambiarDatosDocenteForm.value.correo,
            nuevaMateria: cambiarDatosDocenteForm.value.materia,
            nuevoGrado: cambiarDatosDocenteForm.value.grado, 
            nuevoAnhosExperiencia: cambiarDatosDocenteForm.value.anhosExperiencia,
            nuevaContrasena: cambiarDatosDocenteForm.value.nuevaContrasena,
            contrasenhaActual: cambiarDatosDocenteForm.value.contrasenaOld,
            ci: CI
        };

        return this.http.post<any>(this.baseUrl + 'usuario/cambiarDatosDocente', datosDocenteNuevos);
    }


    cambiarDatosJefe(cambiarDatosJefeForm: FormGroup){
      
        const nuevosDatosJefe: JefeCarreraNuevosDatos = {
            nuevoNombre: cambiarDatosJefeForm.value.nuevoNombre,
            nuevoCorreo: cambiarDatosJefeForm.value.nuevoCorreo,
            nuevoNumeroTelefono: cambiarDatosJefeForm.value.nuevoNumeroTelefono,
            nuevaFechaNacimiento: cambiarDatosJefeForm.value.nuevaFechaNacimiento,
            nuevaContrasenha: cambiarDatosJefeForm.value.nuevaContrasenha,
            contrasenhaActual: cambiarDatosJefeForm.value.contrasenhaActual,
            ci: sessionStorage.getItem('usuarioCI') || '-1'
        }

        return this.http.post<any>(this.baseUrl + 'usuario/cambiarDatosJefe', nuevosDatosJefe);
    }
}