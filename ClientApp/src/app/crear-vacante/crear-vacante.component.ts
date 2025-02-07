import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Materia } from '../models/interfaces/materia.interface';
import { vacanteService } from '../services/vacanteService';
import { Router } from '@angular/router';
import { GetSessionRole } from '../services/GetSessionRole';


@Component({
  selector: 'app-crear-vacante',
  templateUrl: './crear-vacante.component.html',
  styleUrls: ['./crear-vacante.component.css']
})
export class CrearVacanteComponent {

  public role: any;
  vacanteForm: FormGroup = this.fb.group({
    nombreVacante: ['', [Validators.required]],
    materia: ['', [Validators.required]],
    descripcionVacante: ['', [Validators.required]],
    fechaInicio: ['', [Validators.required]],
    fechaFinalizacion: ['', [Validators.required]]
  });
  
  materias: Materia[] = [];
  CI: string = sessionStorage.getItem('usuarioCI') || '-1';

  constructor(private fb: FormBuilder, private vacanteService: vacanteService, private router: Router)
  {
    this.vacanteService.GetMateriasJefeCarrera(this.CI).subscribe(result => {
      this.materias = result;
      console.log(this.materias);
    })
    this.role = GetSessionRole;
    
  }

  submitForm()
  {
    if(this.vacanteForm.invalid)
    {
      alert("Campos invalidos");
    }
    else if(new Date(this.vacanteForm.value.fechaInicio).getTime() == new Date(this.vacanteForm.value.fechaFinalizacion).getTime())
    {
      alert("No se puede crear una vacante que termine en la misma fecha");
    }
    else if(new Date(this.vacanteForm.value.fechaInicio).getTime() > new Date(this.vacanteForm.value.fechaFinalizacion).getTime() || new Date(this.vacanteForm.value.fechaFinalizacion).getTime() < Date.now()){
      alert("Error en las fechas");
    }
    else
    {
      this.vacanteService.CrearVacante(this.vacanteForm).subscribe( result => {
        alert(result.mensaje);
        this.router.navigate(['/vacantes-creadas']);
      }, error => alert(error.error));
    }
    
  }

}
