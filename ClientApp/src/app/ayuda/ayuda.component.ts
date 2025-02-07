import { Component } from '@angular/core';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {
  public role: any;
  constructor(){
    this.role = GetSessionRole;
  }
}
