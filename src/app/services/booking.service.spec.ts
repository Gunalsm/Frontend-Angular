import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookingService } from './booking.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [BookingService,Router]
    });
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate to booking page and log the doctor name and category', () => {
    const navigateSpy = jest.spyOn(service['router'], 'navigate');
    const dummyDoctor = { doc_id: 1, name: 'Dr. A', catagory: 'Cardiology' };
    service.bookappoints(dummyDoctor);
    expect(navigateSpy).toHaveBeenCalledWith(['/booking'], { queryParams: { doc_id: dummyDoctor.doc_id } });

    // expect(navigateSpy).toHaveBeenCalledWith(['/booking', dummyDoctor.doc_id]);
    expect(console.log).toHaveBeenCalledWith('Booked appointment with Dr. A (Cardiology)');
  });
});




// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';

// import { BookingService } from './booking.service';

// describe('BookingService', () => {
//   let service: BookingService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterTestingModule],
//       providers: [BookingService]
//     });
//     service = TestBed.inject(BookingService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should get the doctor list', () => {
//     const dummyData = [{ doc_id: 1, name: 'Dr. A', catagory: 'Cardiology' }];

//     service.getDoctorList().subscribe((data) => {
//       expect(data).toEqual(dummyData);
//     });

//     const req = httpMock.expectOne('http://127.0.0.1:80/doctors');
//     expect(req.request.method).toBe('GET');
//     req.flush(dummyData);
//   });

//   it('should navigate to booking page and log the doctor name and category', () => {
//     const navigateSpy = spyOn(service['router'], 'navigate');

//     const dummyDoctor = { doc_id: 1, name: 'Dr. A', catagory: 'Cardiology' };

//     service.bookappoints(dummyDoctor);

//     expect(navigateSpy).toHaveBeenCalledWith(['/bookingpage'], {
//       queryParams: { doc_id: dummyDoctor.doc_id }
//     });

//     expect(console.log).toHaveBeenCalledWith(dummyDoctor.name);
//     expect(console.log).toHaveBeenCalledWith(dummyDoctor.catagory);
//   });
// });

















// import { TestBed } from '@angular/core/testing';

// import { BookingService } from './booking.service';

// describe('BookingService', () => {
//   let service: BookingService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(BookingService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
