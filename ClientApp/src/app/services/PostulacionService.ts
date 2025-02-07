import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Postulacion } from "../models/interfaces/postulacion.interface";
import { DocenteDatosPostulacion } from "../models/interfaces/docenteDatosPostulacion.interface";

@Injectable()
export class PostulacionService
{
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl : string){}


    ConseguirPostulacionesVigentes(){
        return this.http.get<Postulacion[]>(this.baseUrl + 'postulacion/conseguirPostulacionesVigentes/' + sessionStorage.getItem('usuarioCI'));
    }

    ConseguirHistorialPostulaciones(){
        return this.http.get<Postulacion[]>(this.baseUrl + 'postulacion/conseguirPostulacionesHistorial/' + sessionStorage.getItem('usuarioCI'));
    }

    ConseguirDetallePostulacion(postulacionId: string){
        return this.http.get<Postulacion>(this.baseUrl + 'postulacion/ConseguirDetallesPostulacion/' + postulacionId);
    }

}