import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, throwError, timer } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loginpage', () => {
    it('should send a POST request to the API endpoint', () => {
      const mockData = {
        username:"sai@gmail.com",
        password:"Sai#5598"
      };
      service.loginpage(mockData).subscribe(response => {
        expect(response).toBeTruthy();
      });

      const req = httpMock.expectOne('http://localhost:8000/login');
      expect(req.request.method).toBe('POST');
      req.flush({ access_token: 'some-token' }); // Add expected response here
    });

    it('should handle errors', () => {
      const mockData = {
        // Add mock data here
      };
      service.loginpage(mockData).subscribe(() => {}, error => {
        expect(error).toBeTruthy();
      });

      const req = httpMock.expectOne('http://localhost:8000/login');
      expect(req.request.method).toBe('POST');
      req.flush('Failed to login', { status: 401, statusText: 'Unauthorized' }); // Add expected error here
    });
  });
})





















// import { TestBed } from '@angular/core/testing';

// import { LoginService } from './login.service';

// describe('LoginService', () => {
//   let service: LoginService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LoginService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
