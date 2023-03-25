import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { DoctorloginService } from './doctorlogin.service'

describe('DoctorloginService', () => {
  let service: DoctorloginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DoctorloginService]
    });
    service = TestBed.inject(DoctorloginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

it('should be created', () => {
  expect(service).toBeTruthy();
});

  it('should send login request to server', () => {
    const doctorlogindata = { email: 'test@example.com', password: 'password' };
    service.doctorloginpage(doctorlogindata).subscribe(res => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne('http://127.0.0.1:80/login');
    expect(req.request.method).toBe('POST');
    req.flush({}); // mock response
  });

  it('should return access token if user is logged in', () => {
    sessionStorage.setItem('access_token', 'test_token');
    const user = service.isLoggedIn();
    expect(user).toBe('test_token');
  });

  it('should navigate to doctorbookedview route', () => {
    const routerSpy = jest.spyOn(TestBed.inject(Router), 'navigate');
    service.doclogin();
    expect(routerSpy).toHaveBeenCalledWith(['/doctorbookedview']);
  });
});








// import { TestBed } from '@angular/core/testing';

// import { DoctorloginService } from './doctorlogin.service';

// describe('DoctorloginService', () => {
//   let service: DoctorloginService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DoctorloginService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
