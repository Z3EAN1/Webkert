import { TestBed } from '@angular/core/testing';

import { HealtcareserviveService } from './healtcareservive.service';

describe('HealtcareserviveService', () => {
  let service: HealtcareserviveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealtcareserviveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
