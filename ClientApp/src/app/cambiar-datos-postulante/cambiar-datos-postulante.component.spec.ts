import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarDatosPostulanteComponent } from './cambiar-datos-postulante.component';

describe('CambiarDatosPostulanteComponent', () => {
  let component: CambiarDatosPostulanteComponent;
  let fixture: ComponentFixture<CambiarDatosPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarDatosPostulanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarDatosPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
