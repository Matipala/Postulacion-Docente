import { Component } from '@angular/core';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-ayuda-jefe',
  templateUrl: './ayuda-jefe.component.html',
  styleUrls: ['./ayuda-jefe.component.css']
})
export class AyudaJefeComponent {
  public role: any;
  constructor(){
    this.role = GetSessionRole;
  }
}
