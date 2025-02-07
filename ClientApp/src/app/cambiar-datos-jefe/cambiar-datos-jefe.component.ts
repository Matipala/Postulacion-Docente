import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from '../services/PerfilService';
import { Router } from '@angular/router';
import { GetSessionRole } from '../services/GetSessionRole';

//TODO: PERMITIR CAMBIAR DE CARRERA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

@Component({
  selector: 'app-cambiar-datos-jefe',
  templateUrl: './cambiar-datos-jefe.component.html',
  styleUrls: ['./cambiar-datos-jefe.component.css']
})
export class CambiarDatosJefeComponent {
  public role: any;
  nuevosDatosJefeForm: FormGroup = this.fb.group({
    nuevoNombre: ['', [Validators.required]],
    nuevoCorreo: ['', [Validators.required, Validators.email]],
    nuevaFechaNacimiento: ['', [Validators.required]],
    nuevoNumeroTelefono: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    nuevaContrasenha: ['', [Validators.required, Validators.minLength(4)]],
    nuevaContrasenhaRep: ['', [Validators.required, Validators.minLength(4)]],
    contrasenhaActual: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder, private perfilService: PerfilService, private router: Router){
    this.perfilService.obtenerDatosJefeCarrera().subscribe(result => {
      this.nuevosDatosJefeForm.patchValue({
        nuevoNombre: result.nombre,
        nuevoCorreo: result.correo,
        nuevoNumeroTelefono: result.numeroTelefono,
      });
    }); 
    this.role = GetSessionRole;
  }

  CambiarDatosJefe(){
    if(this.nuevosDatosJefeForm.invalid){
      alert("Algunos campos son invalidos. Rellena el formulario correctamente");
    }
    else if(this.nuevosDatosJefeForm.value.nuevaContrasenha != this.nuevosDatosJefeForm.value.nuevaContrasenhaRep){
      alert("Las contraseñas son diferentes")
    }
    else if(new Date(this.nuevosDatosJefeForm.value.nuevaFechaNacimiento).getTime() > Date.now())
    {
      alert("Hubo un error al seleccionar la fecha. Hazlo otra vez.");
    }
    else{
      this.perfilService.cambiarDatosJefe(this.nuevosDatosJefeForm).subscribe( result => {
        alert(result.mensaje);
        this.router.navigate(['/profile-jefe']);
      }, error => {
        alert(error.error.mensaje);
      })
    }
  }
  
}
