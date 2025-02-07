import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialVacantesComponent } from './historial-vacantes.component';

describe('HistorialVacantesComponent', () => {
  let component: HistorialVacantesComponent;
  let fixture: ComponentFixture<HistorialVacantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialVacantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialVacantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
