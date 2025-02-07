import { Component } from '@angular/core';
import { Vacante } from '../models/interfaces/vacante.interface';
import { Router } from '@angular/router';
import { vacanteService } from '../services/vacanteService';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-historial-vacantes',
  templateUrl: './historial-vacantes.component.html',
  styleUrls: ['./historial-vacantes.component.css']
})
export class HistorialVacantesComponent {
  vacantes: Vacante[] = [];
  public role:any;

  constructor(private router: Router, private vacanteService: vacanteService){
    this.vacanteService.GetHistorialVacantes().subscribe(result => {
      this.vacantes = result;
      console.log(result);
    }, error => console.log(error));
    this.role = GetSessionRole;
  }

}