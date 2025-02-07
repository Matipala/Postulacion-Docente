import { Component } from '@angular/core';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-home-jefe',
  templateUrl: './home-jefe.component.html',
  styleUrls: ['./home-jefe.component.css']
})
export class HomeJefeComponent {
  public role: any;
  constructor(){
    this.role = GetSessionRole;
  }
}
