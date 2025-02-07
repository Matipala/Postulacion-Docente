import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileJefeComponent } from './profile-jefe.component';

describe('ProfileJefeComponent', () => {
  let component: ProfileJefeComponent;
  let fixture: ComponentFixture<ProfileJefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileJefeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
