import { Component } from '@angular/core';
import { LoginData } from '../models/interfaces/login.interface';
import { LoginService } from '../services/loginService';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router){
    this.loginForm = this.loginService.loginFormBuilder();
  }

  loginDocente(){

    if(!this.loginForm.valid){
      console.log("Datos faltantes o incorrectos");
    }
    else{

      let loginData : LoginData = {
        email : this.loginForm.value.email,
        password: this.loginForm.value.password
      };
  
      console.log("Verificando credenciales");
      this.loginService.loginDocente(loginData).subscribe( result => {
        sessionStorage.setItem('usuarioCI', result.usuarioCI);
        sessionStorage.setItem('isJefe', 'false');
        this.router.navigate(['/']);
      }, error => alert(error.error));
    }
    
   
  }


  loginJefeCarrera(){

    if(!this.loginForm.valid){
      console.log("Datos faltantes o incorrectos");
    }
    else{

      let loginData : LoginData = {
        email : this.loginForm.value.email,
        password: this.loginForm.value.password
      };
  
      console.log("Verificando credenciales");
      this.loginService.loginJefeCarrera(loginData).subscribe( result => {
        sessionStorage.setItem('usuarioCI', result.usuarioCI);
        sessionStorage.setItem('isJefe', 'true');
        this.router.navigate(['/jefe']);
      }, error => alert(error.error));
    }

  }
}
