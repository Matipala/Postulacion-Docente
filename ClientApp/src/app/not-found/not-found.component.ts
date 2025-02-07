import { Component } from '@angular/core';
import { GetSessionRole } from '../services/GetSessionRole';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

export class NotFoundComponent {
  public role: any;
  constructor(){
    this.role = GetSessionRole;
  }
}
