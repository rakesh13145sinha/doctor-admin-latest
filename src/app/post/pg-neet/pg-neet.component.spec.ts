import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgNeetComponent } from './pg-neet.component';

describe('PgNeetComponent', () => {
  let component: PgNeetComponent;
  let fixture: ComponentFixture<PgNeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgNeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgNeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
