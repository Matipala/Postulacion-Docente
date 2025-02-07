import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

// describe('RegisterComponent', () => {
//     let component: RegisterComponent;
//     let fixture: ComponentFixture<RegisterComponent>;

//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             declarations: [RegisterComponent],
//             imports: [ReactiveFormsModule],
//         }).compileComponents();

//         fixture = TestBed.createComponent(RegisterComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create the component', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should invalidate the form when empty', () => {
//         expect(component.registerForm.valid).toBeFalsy();
//     });

//     it('should validate the form with correct input', () => {
//         component.registerForm.controls['nombre'].setValue('Juan Pérez');
//         component.registerForm.controls['telefono'].setValue('12345678');
//         component.registerForm.controls['ci'].setValue('12345678');
//         component.registerForm.controls['fechaNacimiento'].setValue('1990-01-01');
//         component.registerForm.controls['correo'].setValue('juan@example.com');
//         component.registerForm.controls['contrasena'].setValue('123456');
//         component.registerForm.controls['contrasenaRep'].setValue('123456');
//         component.registerForm.controls['materia'].setValue('Matemáticas');
//         component.registerForm.controls['grado'].setValue('Licenciado');
//         component.registerForm.controls['anosExperiencia'].setValue(5);

//         expect(component.registerForm.valid).toBeTruthy();
//     });

//     it('should invalidate the form when passwords do not match', () => {
//         component.registerForm.controls['contrasena'].setValue('123456');
//         component.registerForm.controls['contrasenaRep'].setValue('654321');
//         expect(component.registerForm.valid).toBeFalsy();
//     });

//     it('should validate carreras selection for jefe de carrera', () => {
//         component.toggleJefeCarrera();
//         component.registerForm.controls['carreras'].setValue(['Ingeniería de Software', 'Arquitectura']);
//         expect(component.registerForm.get('carreras')?.valid).toBeTruthy();
//     });

//     it('should invalidate carreras selection when less than 1 or more than 3', () => {
//         component.toggleJefeCarrera();
//         component.registerForm.controls['carreras'].setValue([]); // Ninguna carrera seleccionada
//         expect(component.registerForm.get('carreras')?.valid).toBeFalsy();

//         component.registerForm.controls['carreras'].setValue([
//             'Ingeniería de Software',
//             'Arquitectura',
//             'Medicina',
//             'Derecho',
//         ]); // Más de 3 carreras seleccionadas
//         expect(component.registerForm.get('carreras')?.valid).toBeFalsy();
//     });

//     it('should set carreras validators only when jefe de carrera is selected', () => {
//         // Inicialmente sin validadores de carreras
//         expect(component.registerForm.get('carreras')?.validator).toBeNull();

//         // Activar modo jefe de carrera
//         component.toggleJefeCarrera();
//         expect(component.registerForm.get('carreras')?.validator).toBeDefined();

//         // Desactivar modo jefe de carrera
//         component.toggleJefeCarrera();
//         expect(component.registerForm.get('carreras')?.validator).toBeNull();
//     });
// });
