import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPostulacionComponent } from './estado-postulacion.component';

describe('EstadoPostulacionComponent', () => {
  let component: EstadoPostulacionComponent;
  let fixture: ComponentFixture<EstadoPostulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoPostulacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoPostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
