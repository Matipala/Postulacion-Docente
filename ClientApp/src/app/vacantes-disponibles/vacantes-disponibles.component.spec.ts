import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantesDisponiblesComponent } from './vacantes-disponibles.component';

describe('VacantesDisponiblesComponent', () => {
  let component: VacantesDisponiblesComponent;
  let fixture: ComponentFixture<VacantesDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacantesDisponiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacantesDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
