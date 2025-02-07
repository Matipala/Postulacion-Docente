import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";


@Injectable()
export class CarreraService{
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl : string ){}


    GetCarrerasDisponibles(){
        return this.http.get<any[]>(this.baseUrl + 'carrera/ConseguirCarrerasDisponibles')
    }
}