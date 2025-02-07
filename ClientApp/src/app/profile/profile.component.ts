import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver'; 
import { PerfilService } from '../services/PerfilService';
import { Docente } from '../models/interfaces/docente.interface';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  docente: Docente | undefined;
  public role:any;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private perfilService: PerfilService){
    this.perfilService.obtenerDatosDocente().subscribe(result => {
      this.docente = result;
      console.log(this.docente);
    }); 
    this.role = GetSessionRole;
  }


  getPdf()
  {
    const docenteCI = sessionStorage.getItem('usuarioCI');

    if(docenteCI != null)
    {
      this.http.get(this.baseUrl + "pdf/generarPdf/" + docenteCI, {responseType: 'blob'}).subscribe(result => {
        console.log(result);
        FileSaver.saveAs(result, "Curriculum.pdf");
      }, error => console.log(error));
    }
    
  }
}
