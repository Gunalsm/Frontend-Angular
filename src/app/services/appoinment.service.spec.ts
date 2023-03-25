import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppoinmentService } from './appoinment.service';

describe('AppoinmentService', () => {
  let service: AppoinmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppoinmentService]
    });
    service = TestBed.inject(AppoinmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getSlots', () => {
    it('should return an Observable of string array', () => {
      const docId = 123;
      const day = '2022-03-03';
      const slots = ['10:00', '11:00', '12:00'];
      service.getSlots(docId, day).subscribe(response => {
        expect(response).toEqual(slots);
      });
      const req = httpMock.expectOne(`http://127.0.0.1:60/slots/${docId}/${day}`);
      expect(req.request.method).toBe('GET');
      req.flush(slots);
    });
  });
});



















// import { TestBed } from '@angular/core/testing';

// import { AppoinmentService } from './appoinment.service';

// describe('AppoinmentService', () => {
//   let service: AppoinmentService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AppoinmentService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
