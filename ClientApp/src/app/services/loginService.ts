import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { LoginData } from "../models/interfaces/login.interface";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";


@Injectable()
export class LoginService{

    baseUrl: string;
    http: HttpClient;
    formBuilder: FormBuilder;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl : string, formBuilder: FormBuilder){
        this.http = http;
        this.baseUrl = baseUrl;
        this.formBuilder = formBuilder;
    }

    loginDocente(loginData : LoginData){
        return this.http.post<any>(this.baseUrl + 'usuario/loginDocente', loginData);
    }

    loginJefeCarrera(loginData: LoginData){
        return this.http.post<any>(this.baseUrl + 'usuario/loginJefeCarrera', loginData);
    }

    loginFormBuilder(){
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

}
