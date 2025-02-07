import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from '../services/PerfilService';
import { Router } from '@angular/router';
import { Docente } from '../models/interfaces/docente.interface';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-cambiar-datos-postulante',
  templateUrl: './cambiar-datos-postulante.component.html',
  styleUrls: ['./cambiar-datos-postulante.component.css']
})
export class CambiarDatosPostulanteComponent {

  public role: any;
  cambiarDatosForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    fechaNacimiento: ['', [Validators.required]],
    descripcionPersonal: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    materia: ['', [Validators.required]],
    grado: ['', [Validators.required]],
    anhosExperiencia: ['', [Validators.required]],
    nuevaContrasena: ['', [Validators.required, Validators.minLength(4)]],
    contrasenaRep: ['', [Validators.required, Validators.minLength(4)]],
    contrasenaOld: ['', [Validators.required, Validators.minLength]]
  });

  docente: Docente | undefined;
  constructor(private fb: FormBuilder, private perfilService: PerfilService, private router: Router)
  {
    this.perfilService.obtenerDatosDocente().subscribe(result => {
      this.docente = result;

      this.cambiarDatosForm.patchValue({
        nombre: this.docente.nombre,
        telefono: this.docente.telefono,
        descripcionPersonal: this.docente.descripcionPersonal,
        correo: this.docente.correo,
        materia: this.docente.materia,
        grado: this.docente.grado,
        anhosExperiencia: this.docente.anhosExperiencia
      });

    });
    this.role = GetSessionRole;
    
  }


  cambiarDatosDocente()
  {
    if(this.cambiarDatosForm.invalid)
    {
      alert("Campos invalidos");
    }
    else if(this.cambiarDatosForm.value.nuevaContrasena != this.cambiarDatosForm.value.contrasenaRep)
    {
      alert("Las contraseñas no coinciden");
    }
    else if(new Date(this.cambiarDatosForm.value.fechaNacimiento).getTime() > Date.now())
    {
      alert("Fecha de nacimiento incorrecta");
    }
    else
    {
      this.perfilService.cambiarDatosDocente(this.cambiarDatosForm, sessionStorage.getItem('usuarioCI') || '-1').subscribe( result => {
        alert(result.mensaje);
        this.router.navigate(['/profile'])
      }, error => alert(error.error.mensaje))
    }
  }


  descartarCambios()
  {
    this.router.navigate(['/profile']);
  }
}
