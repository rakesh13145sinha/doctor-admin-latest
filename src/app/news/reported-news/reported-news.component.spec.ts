import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedNewsComponent } from './reported-news.component';

describe('ReportedNewsComponent', () => {
  let component: ReportedNewsComponent;
  let fixture: ComponentFixture<ReportedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
