import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';

import { VacanteComponent } from './vacante/vacante.component';
import { vacanteService } from './services/vacanteService';
import { LoginService } from './services/loginService';
import { FooterComponent } from './footer/footer.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UsuarioService } from './services/UsuarioService';
import { VacantesDisponiblesComponent } from './vacantes-disponibles/vacantes-disponibles.component';
import { PostulacionesPostulanteComponent } from './postulaciones-postulante/postulaciones-postulante.component';
import { EstadoPostulacionComponent } from './estado-postulacion/estado-postulacion.component';
import { CambiarDatosPostulanteComponent } from './cambiar-datos-postulante/cambiar-datos-postulante.component';
import { PostularseComponent } from './postularse/postularse.component';
import { VacantesCreadasComponent } from './vacantes-creadas/vacantes-creadas.component';
import { PostulacionesRecibidasComponent } from './postulaciones-recibidas/postulaciones-recibidas.component';
import { CrearVacanteComponent } from './crear-vacante/crear-vacante.component';
import { PerfilService } from './services/PerfilService';
import { RevisarPostulacionComponent } from './revisar-postulacion/revisar-postulacion.component';
import { CambiarDatosJefeComponent } from './cambiar-datos-jefe/cambiar-datos-jefe.component';
import { ProfileJefeComponent } from './profile-jefe/profile-jefe.component';
import { PostulacionService } from './services/PostulacionService';
import { NavMenuJefeComponent } from './nav-menu-jefe/nav-menu-jefe.component';
import { HomeJefeComponent } from './home-jefe/home-jefe.component';
import { AyudaJefeComponent } from './ayuda-jefe/ayuda-jefe.component';
import { JefeCarreraService } from './services/JefeCarreraService';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarreraService } from './services/CarreraService';
import { HistorialVacantesComponent } from './historial-vacantes/historial-vacantes.component';
import { HistorialPostulacionesComponent } from './historial-postulaciones/historial-postulaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    VacanteComponent,
    FooterComponent,
    ComunidadComponent,
    AyudaComponent,
    ReglamentoComponent,
    ProfileComponent,
    RegisterComponent,
    VacantesDisponiblesComponent,
    PostulacionesPostulanteComponent,
    EstadoPostulacionComponent,
    CambiarDatosPostulanteComponent,
    PostularseComponent,
    VacantesCreadasComponent,
    PostulacionesRecibidasComponent,
    CrearVacanteComponent,
    RevisarPostulacionComponent,
    CambiarDatosJefeComponent,
    ProfileJefeComponent,
    NavMenuJefeComponent,
    HomeJefeComponent,
    AyudaJefeComponent,
    NotFoundComponent,
    HistorialVacantesComponent,
    HistorialPostulacionesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'login', component: LoginComponent },
      { path: 'vacante', component: VacanteComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'comunidad', component: ComunidadComponent },
      { path: 'ayuda', component: AyudaComponent },
      { path: 'reglamento', component: ReglamentoComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'vacantes-disponibles', component: VacantesDisponiblesComponent },
      { path: 'postulaciones', component: PostulacionesPostulanteComponent },
      { path: 'estado-postulacion/:postulacionId', component: EstadoPostulacionComponent },
      { path: 'cambiar-datos-postulante', component: CambiarDatosPostulanteComponent },
      { path: 'postularse/:vacanteId', component: PostularseComponent },
      { path: 'historial-postulaciones', component: HistorialPostulacionesComponent },

      //Desde Aqui seran las secciones hechas para el jefe de carrera

      { path: 'jefe', component: HomeJefeComponent},
      { path: 'vacantes-creadas', component: VacantesCreadasComponent },
      { path: 'postulaciones-recibidas/:vacanteId', component: PostulacionesRecibidasComponent },
      { path: 'crear-vacante', component: CrearVacanteComponent },
      { path: 'revisar-postulacion/:vacanteId/:postulacionId', component: RevisarPostulacionComponent },
      { path: 'cambiar-datos-jefe', component: CambiarDatosJefeComponent },
      { path: 'profile-jefe', component: ProfileJefeComponent },
      { path: 'ayuda-jefe', component: AyudaJefeComponent },
      { path: 'historial-vacantes', component: HistorialVacantesComponent },

      //el de abajo debe manejar los 404s, por lo que no se le debe añadir nada más debajo de esta línea
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},vacanteService, LoginService, PerfilService, PostulacionService, JefeCarreraService, UsuarioService, CarreraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
