import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialPostulacionesComponent } from './historial-postulaciones.component';

describe('HistorialPostulacionesComponent', () => {
  let component: HistorialPostulacionesComponent;
  let fixture: ComponentFixture<HistorialPostulacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialPostulacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialPostulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
