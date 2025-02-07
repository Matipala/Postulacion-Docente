import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaJefeComponent } from './ayuda-jefe.component';

describe('AyudaJefeComponent', () => {
  let component: AyudaJefeComponent;
  let fixture: ComponentFixture<AyudaJefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaJefeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
