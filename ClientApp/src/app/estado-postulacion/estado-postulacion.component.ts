import { Component } from '@angular/core';
import { Postulacion } from '../models/interfaces/postulacion.interface';
import { PostulacionService } from '../services/PostulacionService';
import { ActivatedRoute } from '@angular/router';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-estado-postulacion',
  templateUrl: './estado-postulacion.component.html',
  styleUrls: ['./estado-postulacion.component.css']
})
export class EstadoPostulacionComponent {
  postulacion: Postulacion | undefined;
  public role: any;

  constructor(private postulacionService: PostulacionService, private activatedRoute: ActivatedRoute){
    this.postulacionService.ConseguirDetallePostulacion(this.activatedRoute.snapshot.paramMap.get('postulacionId') || '-1').subscribe(result => {
      this.postulacion = result;
      console.log(result);
    }, error => console.log(error));
    this.role = GetSessionRole;
  }

}
