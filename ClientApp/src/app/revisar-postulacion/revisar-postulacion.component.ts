import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver'; 
import { PerfilService } from '../services/PerfilService';
import { Docente } from '../models/interfaces/docente.interface';
import { DocenteDatosPostulacion } from '../models/interfaces/docenteDatosPostulacion.interface';
import { JefeCarreraService } from '../services/JefeCarreraService';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-revisar-postulacion',
  templateUrl: './revisar-postulacion.component.html',
  styleUrls: ['./revisar-postulacion.component.css']
})
export class RevisarPostulacionComponent {
  
  postulacion: DocenteDatosPostulacion | undefined;
  public role:any;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private jefeCarreraService: JefeCarreraService, private activatedRoute: ActivatedRoute, private router: Router){
    const postulacionId = parseInt(this.activatedRoute.snapshot.paramMap.get('postulacionId') || '-1');

    this.jefeCarreraService.RevisarPostulacion(postulacionId).subscribe(result => {
      this.postulacion = result;
      console.log(this.postulacion);
    }, error => console.log(error)); 
    this.role = GetSessionRole;
  }


  AscenderPostulacion(){
    const postulacionId = parseInt(this.activatedRoute.snapshot.paramMap.get('postulacionId') || '-1');
    console.log("se esta ascendiendo una postulacion", postulacionId);
    const anteriorEstadoId = this.postulacion?.estadoId;
    this.jefeCarreraService.AscenderPostulacion(postulacionId).subscribe(result => {
      alert(result.mensaje);

      if(anteriorEstadoId == 3){
        this.router.navigate(['/vacantes-creadas']);
      }
      else{
        this.router.navigate(['/postulaciones-recibidas', this.activatedRoute.snapshot.paramMap.get('vacanteId')]);
      }
      
      
    }, error => alert(error.error));
  }


  RechazarPostulacion(){
    const postulacionId = parseInt(this.activatedRoute.snapshot.paramMap.get('postulacionId') || '-1');
    this.jefeCarreraService.RechazarPostulacion(postulacionId).subscribe(result => {
      alert(result.mensaje);
      this.router.navigate(['/postulaciones-recibidas', this.activatedRoute.snapshot.paramMap.get('vacanteId')]);
    }, error => alert(error.error));
  }
}
