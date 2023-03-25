import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterService]
    });
    service = TestBed.inject(RegisterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to the API endpoint', () => {
    const mockData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'johndoe'
      // Add mock data here
    };
    service.registerpage(mockData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:8000/patients');
    expect(req.request.method).toBe('POST');
    req.flush({mockData}); // Add expected response here
  });
});














// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';
// // import { RegisterService } from './signup.service';
// import { RegisterService } from './register.service';

// describe('SignupService', () => {
//   let service: RegisterService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ HttpClientTestingModule ],
//       providers: [ RegisterService ]
//     });
//     service = TestBed.inject(RegisterService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should send patient details to the server', () => {
//     const dummyData = {
//       patient_name: 'John Doe',
//       patient_email: 'johndoe@example.com',
//       password: 'johndoe'
//     };

//     service.registerpage(dummyData).subscribe(res => {
//       expect(res).toBeTruthy();
//     });

//     const req = httpMock.expectOne('http://127.0.0.1:8000/patients');
//     expect(req.request.method).toBe('POST');
//     req.flush(dummyData);
//   });
// });






// import { TestBed } from '@angular/core/testing';

// import { RegisterService } from './register.service';

// describe('RegisterService', () => {
//   let service: RegisterService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(RegisterService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
