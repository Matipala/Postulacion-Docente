import { Component } from '@angular/core';
import { Docente } from '../models/interfaces/docente.interface';
import { DocenteDatosPostulacion } from '../models/interfaces/docenteDatosPostulacion.interface';
import { JefeCarreraService } from '../services/JefeCarreraService';
import { vacanteService } from '../services/vacanteService';
import { ActivatedRoute } from '@angular/router';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-postulaciones-recibidas',
  templateUrl: './postulaciones-recibidas.component.html',
  styleUrls: ['./postulaciones-recibidas.component.css']
})
export class PostulacionesRecibidasComponent {
  postulaciones: DocenteDatosPostulacion[] = [];
  vacanteId: number = parseInt(this.activatedRoute.snapshot.paramMap.get('vacanteId') || '9');
  public role:any;

  constructor(private jefeCarreraSerivce: JefeCarreraService, private activatedRoute: ActivatedRoute){
    this.jefeCarreraSerivce.GetSolicitudes(this.vacanteId).subscribe( result => {
      this.postulaciones = result;
      console.log(this.postulaciones);
    }, error => console.log(error));
    
    this.role = GetSessionRole;
  }



}
