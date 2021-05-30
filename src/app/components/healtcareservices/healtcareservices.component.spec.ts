import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtcareservicesComponent } from './healtcareservices.component';

describe('HealtcareservicesComponent', () => {
  let component: HealtcareservicesComponent;
  let fixture: ComponentFixture<HealtcareservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealtcareservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealtcareservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
