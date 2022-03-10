import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesWiseNewsComponent } from './pages-wise-news.component';

describe('PagesWiseNewsComponent', () => {
  let component: PagesWiseNewsComponent;
  let fixture: ComponentFixture<PagesWiseNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesWiseNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesWiseNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
