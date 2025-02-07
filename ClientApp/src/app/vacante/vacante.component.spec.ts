import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanteComponent } from './vacante.component';

describe('VacanteComponent', () => {
  let component: VacanteComponent;
  let fixture: ComponentFixture<VacanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
