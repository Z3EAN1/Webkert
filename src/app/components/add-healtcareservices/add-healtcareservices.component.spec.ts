import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHealtcareservicesComponent } from './add-healtcareservices.component';

describe('AddHealtcareservicesComponent', () => {
  let component: AddHealtcareservicesComponent;
  let fixture: ComponentFixture<AddHealtcareservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHealtcareservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHealtcareservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
