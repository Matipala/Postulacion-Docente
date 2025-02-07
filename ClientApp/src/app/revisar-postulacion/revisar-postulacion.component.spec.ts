import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarPostulacionComponent } from './revisar-postulacion.component';

describe('RevisarPostulacionComponent', () => {
  let component: RevisarPostulacionComponent;
  let fixture: ComponentFixture<RevisarPostulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarPostulacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarPostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
