import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarDatosJefeComponent } from './cambiar-datos-jefe.component';

describe('CambiarDatosJefeComponent', () => {
  let component: CambiarDatosJefeComponent;
  let fixture: ComponentFixture<CambiarDatosJefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarDatosJefeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarDatosJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
