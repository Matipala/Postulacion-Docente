import { Component } from '@angular/core';
import { Vacante } from '../models/interfaces/vacante.interface';
import { vacanteService } from '../services/vacanteService';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-postularse',
  templateUrl: './postularse.component.html',
  styleUrls: ['./postularse.component.css']
})
export class PostularseComponent {
  public role:any;
  vacante: Vacante | undefined;

  constructor(private vacanteService: vacanteService, private activatedRoute: ActivatedRoute, private router: Router){
    this.vacanteService.GetDetalleVacante(this.activatedRoute.snapshot.paramMap.get('vacanteId') || '-1').subscribe(result => {
      this.vacante = result;
      console.log(this.vacante);
    }, error => console.log(error));
    
    this.role = GetSessionRole;
  }



  Postularse(){
    const vacanteId = this.vacante?.vacanteId || -1;
    const fechaFinalizacion = this.vacante?.fechaFinalizacion || new Date(0);
    this.vacanteService.Postularse(vacanteId, fechaFinalizacion).subscribe(result => {
      alert(result.mensaje);
      this.router.navigate(['/postulaciones']);
    },error => alert(error));
  }
}
