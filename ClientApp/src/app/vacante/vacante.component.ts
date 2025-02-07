import { Component } from '@angular/core';
import { Docente } from '../models/interfaces/docente.interface';
import { vacanteService } from '../services/vacanteService';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacante.component.html',
  styleUrls: ['./vacante.component.css']
})
export class VacanteComponent {

  docente!: Docente;

  constructor(private vancateService: vacanteService) { }


  ConseguirDocente() {
    this.vancateService.GetDocentesPostulacion().subscribe(result => {
      this.docente = result;
      console.log(result);
    }, error => console.log(error));
  }


}
