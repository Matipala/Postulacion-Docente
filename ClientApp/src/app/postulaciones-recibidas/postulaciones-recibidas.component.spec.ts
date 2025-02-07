import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesRecibidasComponent } from './postulaciones-recibidas.component';

describe('PostulacionesRecibidasComponent', () => {
  let component: PostulacionesRecibidasComponent;
  let fixture: ComponentFixture<PostulacionesRecibidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesRecibidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostulacionesRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
