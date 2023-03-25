import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService]
    });
    service = TestBed.inject(AdminService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a POST request to admin endpoint', () => {
    const mockAdminData = { username: 'admin', password: 'password' };
    const mockResponse = { success: true };

    service.adminpage(mockAdminData).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:80/admin');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should return access token if present in sessionStorage', () => {
    const mockToken = 'abcd1234';
    jest.spyOn(sessionStorage, 'getItem').mockImplementation(() => mockToken);
  
    expect(service.isLoggedIn()).toBe(mockToken);
  });
  

  // it('should return access token if present in sessionStorage', () => {
  //   const mockToken = 'abcd1234';
  //   jest.spyOn(sessionStorage, 'getItem').mockReturnValue(mockToken);

  //   expect(service.isLoggedIn()).toBe(mockToken);
  // });
});









// import { TestBed } from '@angular/core/testing';

// import { AdminService } from './admin.service';

// describe('AdminService', () => {
//   let service: AdminService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AdminService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
