import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesPostulanteComponent } from './postulaciones-postulante.component';

describe('PostulacionesPostulanteComponent', () => {
  let component: PostulacionesPostulanteComponent;
  let fixture: ComponentFixture<PostulacionesPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesPostulanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostulacionesPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
