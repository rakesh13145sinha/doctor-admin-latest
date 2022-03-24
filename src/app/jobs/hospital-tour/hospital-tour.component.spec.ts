import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalTourComponent } from './hospital-tour.component';

describe('HospitalTourComponent', () => {
  let component: HospitalTourComponent;
  let fixture: ComponentFixture<HospitalTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
