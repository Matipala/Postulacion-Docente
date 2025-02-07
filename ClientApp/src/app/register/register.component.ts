import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilService } from '../services/PerfilService';
import { UsuarioService } from '../services/UsuarioService';
import { CarreraService } from '../services/CarreraService';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerFormDocente!: FormGroup;
    registerFormJefe!: FormGroup;

    isJefeCarrera: boolean = false;
    listaCarreras: any[] = [];

    constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService, private carreraService: CarreraService) { 
        this.carreraService.GetCarrerasDisponibles().subscribe( result => {
            this.listaCarreras = result;
            console.log(result);
        }, error => console.log(error));
    }

    ngOnInit(): void {
        this.registerFormDocente = this.formBuilder.group({
            nombre: ['', Validators.required],
            telefono: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(8), Validators.maxLength(8)]],
            ci: ['', Validators.required],
            fechaNacimiento: ['', Validators.required],
            descripcionPersonal: ['', Validators.required],
            especialidad: ['', Validators.required],
            grado: ['', Validators.required],
            anhosExperiencia: ['', [Validators.required, Validators.min(1)]],
            correo: ['', [Validators.required, Validators.email]],
            contrasenha: ['', [Validators.required, Validators.minLength(4)]],
            contrasenhaRep: ['', [Validators.required, Validators.minLength(4)]],
        });

        this.registerFormJefe = this.formBuilder.group({
            nombre: ['', Validators.required],
            telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            ci: ['', Validators.required],
            fechaNacimiento: ['', Validators.required],
            carreras: ['', [Validators.required, this.carrerasValidator()]],
            correo: ['', [Validators.required, Validators.email]],
            contrasenha: ['', [Validators.required, Validators.minLength(4)]],
            contrasenhaRep: ['', [Validators.required, Validators.minLength(4)]],
        });
    }

    // Función para validar las carreras seleccionadas (1 a 3 carreras)
    carrerasValidator() {
        return (control: any) => {
            const selectedCarreras = control.value;
            if (selectedCarreras.length < 1 || selectedCarreras.length > 3) {
                return { invalidCarreras: true };
            }
            return null;
        };
    }

    toggleJefeCarrera(): void {
        this.isJefeCarrera = !this.isJefeCarrera;
    }

    // Método que maneja el cambio de los checkboxes
    onCarreraChange(event: any): void {
        const selectedCarreras = this.registerFormJefe.value.carreras || [];

        // Si el checkbox está marcado, lo agregamos a las selecciones
        if (event.target.checked) {
            if (selectedCarreras.length < 3) {
                selectedCarreras.push(event.target.value);
            } else {
                event.target.checked = false; // Si ya hay 3 carreras seleccionadas, desmarcamos el checkbox
            }
        } else {
            // Si el checkbox está desmarcado, lo eliminamos de las selecciones
            const index = selectedCarreras.indexOf(event.target.value);
            if (index > -1) {
                selectedCarreras.splice(index, 1);
            }
        }

        // Actualizamos el valor en el FormGroup
        this.registerFormJefe.patchValue({ carreras: selectedCarreras });
    }

    // Método que determina si una carrera está seleccionada
    isCarreraSelected(carrera: string): boolean {
        const selectedCarreras = this.registerFormJefe.value.carreras || [];
        return selectedCarreras.includes(carrera);
    }

    registrarUsuario(): void {
        if(this.isJefeCarrera){
            
            if(this.registerFormJefe.invalid){
                window.alert('Por favor, completa todos los campos requeridos.');
                return;
            }
            else if(new Date(this.registerFormJefe.value.fechaNacimiento).getTime() > Date.now())
            {
                window.alert('La fecha seleccionada es incorrecta');
                return;
            }
            else if (this.registerFormJefe.value.contrasena !== this.registerFormJefe.value.contrasenaRep) {
                window.alert('Las contraseñas no coinciden.');
                return;
            }
            else{
                this.usuarioService.registrarJefe(this.registerFormJefe).subscribe(result => {
                    alert(result.mensaje);
                    this.router.navigate(['/login']);
                }, error => alert(error.error.mensaje));
            }
        }
        else{
            if(this.registerFormDocente.invalid){
                window.alert('Por favor, completa todos los campos requeridos.');
                return;
            }
            else if(new Date(this.registerFormDocente.value.fechaNacimiento).getTime() > Date.now())
            {
                window.alert('La fecha seleccionada es incorrecta');
                return;
            }
            else if (this.registerFormDocente.value.contrasena !== this.registerFormDocente.value.contrasenaRep) {
                window.alert('Las contraseñas no coinciden.');
                return;
            }
            else{
                this.usuarioService.registrarDocente(this.registerFormDocente).subscribe(result => {
                    alert(result.mensaje);
                    this.router.navigate(['/login']);
                }, error => alert(error.error.mensaje));
            }   
        }
       
        
        //this.router.navigate(['/login']);
    }
}
