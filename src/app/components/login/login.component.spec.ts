import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let snackBar: MatSnackBar;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [RouterTestingModule],
        providers: [
          {
            provide: LoginService,
            useValue: {
              loginpage: jest.fn(),
              getTokenExpiration$: jest.fn().mockReturnValue(of(false)),
            },
          },
          {
            provide: MatSnackBar,
            useValue: { open: jest.fn() },
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    snackBar = TestBed.inject(MatSnackBar);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('togglePasswordVisibility', () => {
    it('should change passwordFieldType to text', () => {
      component.passwordFieldType = 'password';
      component.togglePasswordVisibility();
      expect(component.passwordFieldType).toBe('text');
    });

    it('should change passwordFieldType to password', () => {
      component.passwordFieldType = 'text';
      component.togglePasswordVisibility();
      expect(component.passwordFieldType).toBe('password');
    });
  });

  // describe('doSubmitForm', () => {
  //   it('should call login service with correct data', () => {
  //     const loginData = { username: 'test', password: 'test' };
  //     component.logindata = loginData;
  //     loginService.loginpage.Lo(of({ user: { pat_id: 1 }, token: 'test' }));
  //     component.doSubmitForm();
  //     expect(loginService.loginpage).toHaveBeenCalledWith(loginData);
  //   });

  //   it('should show snack bar with error message if username or password is empty', () => {
  //     component.logindata = { username: '', password: '' };
  //     component.doSubmitForm();
  //     expect(snackBar.open).toHaveBeenCalledWith('tabs can not be empty', 'done');
  //   });

  //   it('should show snack bar with success message and navigate to doctorpage if login is successful', () => {
  //     const loginData = { username: 'test', password: 'test' };
  //     component.logindata = loginData;
  //     loginService.loginpage.mockReturnValue(of({ user: { pat_id: 1 }, token: 'test' }));
  //     component.doSubmitForm();
  //     expect(snackBar.open).toHaveBeenCalledWith('Login Successfull', 'ok');
  //     expect(router.navigate).toHaveBeenCalledWith(['/doctorpage']);
  //   });

  //   it('should show snack bar with error message if login is unsuccessful', () => {
  //     const loginData = { username: 'test', password: 'test' };
  //     component.logindata = loginData;
  //     loginService.loginpage.mockReturnValue(of(null));
  //     component.doSubmitForm();
  //     expect(snackBar.open).toHaveBeenCalledWith('User not exists please register', 'ok');
  //   });
  // });
});








// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// }
// )
