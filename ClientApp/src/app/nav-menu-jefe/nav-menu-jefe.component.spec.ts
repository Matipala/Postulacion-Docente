import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuJefeComponent } from './nav-menu-jefe.component';

describe('NavMenuJefeComponent', () => {
  let component: NavMenuJefeComponent;
  let fixture: ComponentFixture<NavMenuJefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuJefeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
