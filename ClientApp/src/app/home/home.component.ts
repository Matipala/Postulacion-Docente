import { Component } from '@angular/core';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public role: any;
  constructor(){
    this.role = GetSessionRole;
  }
}
