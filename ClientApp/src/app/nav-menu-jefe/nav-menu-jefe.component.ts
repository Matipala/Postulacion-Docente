import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu-jefe',
  templateUrl: './nav-menu-jefe.component.html',
  styleUrls: ['./nav-menu-jefe.component.css']
})
export class NavMenuJefeComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  CerrarSesion(){
    sessionStorage.removeItem('usuarioCI');
  }
  
}