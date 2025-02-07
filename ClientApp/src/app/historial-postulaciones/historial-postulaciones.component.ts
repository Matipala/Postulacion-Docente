import { Component } from '@angular/core';
import { Postulacion } from '../models/interfaces/postulacion.interface';
import { PostulacionService } from '../services/PostulacionService';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-historial-postulaciones',
  templateUrl: './historial-postulaciones.component.html',
  styleUrls: ['./historial-postulaciones.component.css']
})
export class HistorialPostulacionesComponent {
  postulaciones: Postulacion[] = [];
  public role: any;

  constructor(private postulacionService: PostulacionService){
    this.postulacionService.ConseguirHistorialPostulaciones().subscribe( result => {
      console.log(result);
      this.postulaciones = result;
    }, error => console.log(error));
    this.role = GetSessionRole;
  }
}
