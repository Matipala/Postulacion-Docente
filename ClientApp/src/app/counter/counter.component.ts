import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string){
    
  }
  public incrementCounter() {

    this.currentCount++;
  }
}
