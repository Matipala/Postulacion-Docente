import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostularseComponent } from './postularse.component';

describe('PostularseComponent', () => {
  let component: PostularseComponent;
  let fixture: ComponentFixture<PostularseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostularseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostularseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
