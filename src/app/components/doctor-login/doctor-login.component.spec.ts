import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { DoctorloginService } from 'src/app/services/doctorlogin.service';

import { DoctorLoginComponent } from './doctor-login.component';

describe('DoctorLoginComponent', () => {
  let component: DoctorLoginComponent;
  let fixture: ComponentFixture<DoctorLoginComponent>;
  let mockDoctorLoginService: DoctorloginService;
  let mockRouter: Router;
  let mockActivatedRoute: ActivatedRoute;
  let mockMatSnackBar: MatSnackBar;

  beforeEach(async () => {
    mockDoctorLoginService = {
      doctorloginpage: jest.fn(),
    } as unknown as DoctorloginService;
    mockRouter = {
      navigate: jest.fn(),
    } as unknown as Router;
    mockActivatedRoute = {} as unknown as ActivatedRoute;
    mockMatSnackBar = {
      open: jest.fn(),
    } as unknown as MatSnackBar;

    await TestBed.configureTestingModule({
      declarations: [DoctorLoginComponent],
      providers: [
        { provide: DoctorloginService, useValue: mockDoctorLoginService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: MatSnackBar, useValue: mockMatSnackBar },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    component.togglePasswordVisibility();
    expect(component.passwordFieldType).toBe('text');

    component.togglePasswordVisibility();
    expect(component.passwordFieldType).toBe('password');
  });

  it('should display error message if username or password is empty', () => {
    component.doctorlogindata = {
      username: '',
      password: '',
    };
    component.doctorsubmit();
    expect(mockMatSnackBar.open).toHaveBeenCalledWith('tabs can not be empty', 'done');
  });

  it('should log in successfully', () => {
    const mockResponse = {
      user: {
        doc_id: 1234,
      },
    };
    jest.spyOn(mockDoctorLoginService, 'doctorloginpage').mockReturnValue(of(mockResponse));
    component.doctorlogindata = {
      username: 'username',
      password: 'password',
    };
    component.doctorsubmit();
    expect(mockDoctorLoginService.doctorloginpage).toHaveBeenCalledWith(component.doctorlogindata);
    expect(sessionStorage.getItem('access_token')).toBe(JSON.stringify(mockResponse));
    expect(mockMatSnackBar.open).toHaveBeenCalledWith('Login Successfull', 'ok');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/doctorbookedview']);
  });

  it('should display error message if login fails', () => {
    const mockError = {
      error: {
        message: 'User not exists',
      },
    };
    jest.spyOn(mockDoctorLoginService, 'doctorloginpage').mockReturnValue(throwError(mockError));
    component.doctorlogindata = {
      username: 'username',
      password: 'password',
    };
    component.doctorsubmit();
    expect(mockDoctorLoginService.doctorloginpage).toHaveBeenCalledWith(component.doctorlogindata);
    expect(sessionStorage.getItem('access_token')).toBeNull();
    expect(mockMatSnackBar.open).toHaveBeenCalledWith('User not exists', 'ok');
  });
});
























// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { DoctorLoginComponent } from './doctor-login.component';
// import { DoctorloginService } from 'src/app/services/doctorlogin.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// describe('DoctorLoginComponent', () => {
//   let component: DoctorLoginComponent;
//   let fixture: ComponentFixture<DoctorLoginComponent>;
//   let mockDoctorloginService: DoctorloginService;
//   let mockMatSnackBar: MatSnackBar;
//   let mockRouter;

//   beforeEach(async () => {
//     mockDoctorloginService = {
//       doctorloginpage: jest.fn()
//     } as any;

//     mockMatSnackBar = {
//       open: jest.fn()
//     } as any;

//     mockRouter = {
//       navigate: jest.fn()
//     } as any;

//     await TestBed.configureTestingModule({
//       declarations: [ DoctorLoginComponent ],
//       imports: [
//         RouterTestingModule,
//         HttpClientTestingModule,
//         ReactiveFormsModule
//       ],
//       providers: [
//         { provide: DoctorloginService, useValue: mockDoctorloginService },
//         { provide: MatSnackBar, useValue: mockMatSnackBar },
//         { provide: Router, useValue: mockRouter }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DoctorLoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should toggle password visibility', () => {
//     component.togglePasswordVisibility();
//     expect(component.passwordFieldType).toBe('text');
//     component.togglePasswordVisibility();
//     expect(component.passwordFieldType).toBe('password');
//   });

//   it('should show snackbar if username or password is empty', () => {
//     component.doctorlogindata.username = '';
//     component.doctorlogindata.password = '';
//     component.doctorsubmit();
//     expect(mockMatSnackBar.open).toHaveBeenCalledWith('tabs can not be empty', 'done');
//   });

// })










// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DoctorLoginComponent } from './doctor-login.component';

// describe('DoctorLoginComponent', () => {
//   let component: DoctorLoginComponent;
//   let fixture: ComponentFixture<DoctorLoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DoctorLoginComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DoctorLoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
