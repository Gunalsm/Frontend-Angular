import { TestBed } from '@angular/core/testing';

import { DoctorviewService } from './doctorview.service';

describe('DoctorviewService', () => {
  let service: DoctorviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
