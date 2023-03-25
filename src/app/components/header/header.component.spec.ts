import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderComponent } from './header.component';
import { LoginService } from 'src/app/services/login.service';
import { DoctorloginService } from 'src/app/services/doctorlogin.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loginService: LoginService;
  let doctorLoginService: DoctorloginService;
  let snackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ LoginService, DoctorloginService, MatSnackBar ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    doctorLoginService = TestBed.inject(DoctorloginService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('checkcondition', () => {
  //   it('should return true if the user is logged in', () => {
  //     jest.spyOn(loginService, 'isLoggedIn').mockReturnValue(true);
  //     expect(component.checkcondition()).toBe(true);
  //   });

  //   it('should return false if the user is not logged in', () => {
  //     jest.spyOn(loginService, 'isLoggedIn').mockReturnValue(false);
  //     expect(component.checkcondition()).toBe(false);
  //   });
  // });

  describe('logout', () => {
    it('should log the user out and display a snack bar message', () => {
      const spyLogout = jest.spyOn(loginService, 'logout');
      const spySnackBarOpen = jest.spyOn(snackBar, 'open');
      component.logout();
      expect(spyLogout).toHaveBeenCalled();
      expect(spySnackBarOpen).toHaveBeenCalledWith('Logout Successfully', 'done');
    });
  });

  describe('doctorlogin', () => {
    it('should allow the user to log in as a doctor and display a snack bar message', () => {
      const spyDocLogin = jest.spyOn(doctorLoginService, 'doclogin');
      const spySnackBarOpen = jest.spyOn(snackBar, 'open');
      component.doctorlogin();
      expect(spyDocLogin).toHaveBeenCalled();
      expect(spySnackBarOpen).toHaveBeenCalledWith('Logout Successfully', 'done');
    });
  });

  describe('btnClick', () => {
    it('should display a snack bar message', () => {
      const spySnackBarOpen = jest.spyOn(snackBar, 'open');
      component.btnClick();
      expect(spySnackBarOpen).toHaveBeenCalledWith('Hey Welcome to this login');
    });
  });
});







// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HeaderComponent } from './header.component';
// import { LoginService } from 'src/app/services/login.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { DoctorloginService } from 'src/app/services/doctorlogin.service';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;
//   let loginService: LoginService;
//   let doctorLoginService: DoctorloginService;
//   let matSnackBar: MatSnackBar;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HeaderComponent ],
//       providers: [
//         LoginService,
//         DoctorloginService,
//         MatSnackBar,
//       ],
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     loginService = TestBed.inject(LoginService);
//     doctorLoginService = TestBed.inject(DoctorloginService);
//     matSnackBar = TestBed.inject(MatSnackBar);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call isLoggedIn function', () => {
//     spyOn(loginService, 'isLoggedIn').and.returnValue(true);
//     expect(component.checkcondition()).toBe(true);
//   });

//   it('should call logout function', () => {
//     spyOn(loginService, 'logout');
//     spyOn(matSnackBar, 'open');
//     component.logout();
//     expect(loginService.logout).toHaveBeenCalled();
//     expect(matSnackBar.open).toHaveBeenCalledWith('Logout Successfully', 'done');
//   });

//   it('should call doclogin function', () => {
//     spyOn(doctorLoginService, 'doclogin');
//     spyOn(matSnackBar, 'open');
//     component.doctorlogin();
//     expect(doctorLoginService.doclogin).toHaveBeenCalled();
//     expect(matSnackBar.open).toHaveBeenCalledWith('Logout Successfully', 'done');
//   });

// });















// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HeaderComponent } from './header.component';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HeaderComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
