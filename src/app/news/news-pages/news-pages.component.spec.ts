import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPagesComponent } from './news-pages.component';

describe('NewsPagesComponent', () => {
  let component: NewsPagesComponent;
  let fixture: ComponentFixture<NewsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
