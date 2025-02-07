import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantesCreadasComponent } from './vacantes-creadas.component';

describe('VacantesCreadasComponent', () => {
  let component: VacantesCreadasComponent;
  let fixture: ComponentFixture<VacantesCreadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacantesCreadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacantesCreadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
