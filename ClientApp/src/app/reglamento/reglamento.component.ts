import { Component } from '@angular/core';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'reglamento',
  templateUrl: './reglamento.component.html',
  styleUrls: ['./reglamento.component.css']
})
export class ReglamentoComponent {
  public role:any;
  constructor(){
    this.role = GetSessionRole;
  }
}
