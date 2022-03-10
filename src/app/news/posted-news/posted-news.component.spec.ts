import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedNewsComponent } from './posted-news.component';

describe('PostedNewsComponent', () => {
  let component: PostedNewsComponent;
  let fixture: ComponentFixture<PostedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
