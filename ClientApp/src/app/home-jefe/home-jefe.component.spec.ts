import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJefeComponent } from './home-jefe.component';

describe('HomeJefeComponent', () => {
  let component: HomeJefeComponent;
  let fixture: ComponentFixture<HomeJefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeJefeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
