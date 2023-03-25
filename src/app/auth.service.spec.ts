import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('should return true if access_token is present in session storage', () => {
    sessionStorage.setItem('access_token', 'my-token');
    expect(authService.isLoggedIn()).toBe(true);
  });

  it('should return false if access_token is not present in session storage', () => {
    sessionStorage.removeItem('access_token');
    expect(authService.isLoggedIn()).toBe(false);
  });
});


// import { TestBed } from '@angular/core/testing';

// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   let service: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AuthService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
