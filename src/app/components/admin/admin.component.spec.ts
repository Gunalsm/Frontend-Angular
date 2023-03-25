import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminComponent } from './admin.component';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let mockAdminService: any;
  let mockSnackBar: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockAdminService = {
      adminpage: jest.fn(),
    };

    mockSnackBar = {
      open: jest.fn(),
    };

    mockRouter = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: AdminService, useValue: mockAdminService },
        { provide: MatSnackBar, useValue: mockSnackBar },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should toggle password visibility', () => {
  //   component.passwordFieldType = 'password';
  //   component.togglePasswordVisibility();
  //   expect(component.passwordFieldType).toBe('text');

  //   component.passwordFieldType = 'text';
  //   component.togglePasswordVisibility();
  //   expect(component.passwordFieldType).toBe('password');
  // });

  // it('should show snack bar if username or password is empty', () => {
  //   const mockSnackBarOpen = jest.spyOn(mockSnackBar, 'open');
  //   component.admindata = { username: '', password: '' };
  //   component.doSubmitForm();
  //   expect(mockSnackBarOpen).toHaveBeenCalledWith('tabs can not be empty', 'done');
  // });

  // it('should call adminpage with admin data on form submission', () => {
  //   component.admindata = { username: 'admin', password: 'password' };
  //   mockAdminService.adminpage.mockReturnValue(of('abcd1234'));
  //   component.doSubmitForm();
  //   expect(mockAdminService.adminpage).toHaveBeenCalledWith(component.admindata);
  // });

  // it('should set access_token in sessionStorage on successful login', () => {
  //   const mockToken = 'abcd1234';
  //   mockAdminService.adminpage.mockReturnValue(of(mockToken));
  //   component.doSubmitForm();
  //   expect(sessionStorage.getItem('access_token')).toBe(mockToken);
  // });

  // it('should show success message and navigate to doctordetailpage on successful login', () => {
  //   const mockSnackBarOpen = jest.spyOn(mockSnackBar, 'open');
  //   const mockRouterNavigate = jest.spyOn(mockRouter, 'navigate');
  //   mockAdminService.adminpage.mockReturnValue(of('abcd1234'));
  //   component.doSubmitForm();
  //   expect(mockSnackBarOpen).toHaveBeenCalledWith('Login Successfull', 'ok');
  //   expect(mockRouterNavigate).toHaveBeenCalledWith(['/doctordetailpage']);
  // });
});

















// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { of } from 'rxjs';

// import { AdminComponent } from './admin.component';
// import { AdminService } from 'src/app/services/admin.service';

// describe('AdminComponent', () => {
//   let component: AdminComponent;
//   let fixture: ComponentFixture<AdminComponent>;
//   let adminService: AdminService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       declarations: [AdminComponent],
//       providers: [AdminService]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AdminComponent);
//     component = fixture.componentInstance;
//     adminService = TestBed.inject(AdminService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call adminpage method of AdminService', () => {
//     const mockAdminData = { username: 'admin', password: 'password' };
//     const mockResponse = { success: true };
//     spyOn(adminService, 'adminpage').and.returnValue(of(mockResponse));

//     component.submitAdminData(mockAdminData);

//     expect(adminService.adminpage).toHaveBeenCalledWith(mockAdminData);
//     expect(component.success).toBeTrue();
//   });

//   it('should set success to false if adminpage method of AdminService returns an error', () => {
//     const mockAdminData = { username: 'admin', password: 'password' };
//     spyOn(adminService, 'adminpage').and.returnValue(of({}).pipe(() => { throw new Error('Server error'); }));

//     component.submitAdminData(mockAdminData);

//     expect(adminService.adminpage).toHaveBeenCalledWith(mockAdminData);
//     expect(component.success).toBeFalse();
//   });
// });







// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AdminComponent } from './admin.component';
// import { AdminService } from 'src/app/services/admin.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { of } from 'rxjs';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Router } from '@angular/router';


// describe('AdminComponent', () => {
//   let component: AdminComponent;
//   let fixture: ComponentFixture<AdminComponent>;
//   let adminService: AdminService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [AdminComponent],
//       imports: [
//         MatSnackBarModule,
//         RouterTestingModule,
//         HttpClientTestingModule
//       ],
//       providers: [AdminService]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AdminComponent);
//     component = fixture.componentInstance;
//     adminService = TestBed.inject(AdminService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should toggle password visibility', () => {
//     component.passwordFieldType = 'password';
//     component.togglePasswordVisibility();
//     expect(component.passwordFieldType).toBe('text');
//     component.togglePasswordVisibility();
//     expect(component.passwordFieldType).toBe('password');
//   });

//   it('should display error message if username or password is empty', () => {
//     component.admindata.username = '';
//     component.admindata.password = '';
//     const snackBarSpy = jest.spyOn(TestBed.inject(MatSnackBar), 'open');
//     component.doSubmitForm();
//     expect(snackBarSpy).toHaveBeenCalledWith('tabs can not be empty', 'done');
//   });
  

  // it('should display error message if username or password is empty', () => {
  //   component.admindata.username = '';
  //   component.admindata.password = '';
  //   const spy = jest.spyOn(component.snak, 'open');
  //   component.doSubmitForm();
  //   expect(spy).toHaveBeenCalledWith('tabs can not be empty', 'done');
  // });

//   it('should navigate to doctordetailpage if login is successful', () => {
//     const response = 'access_token';
//     const spy = jest.spyOn(sessionStorage, 'setItem');
//     jest.spyOn(adminService, 'adminpage').mockReturnValue(of(response));
//     const navigateSpy = jest.spyOn(TestBed.inject(Router), 'navigate');
//     component.admindata.username = 'admin';
//     component.admindata.password = 'password';
//     component.doSubmitForm();
//     expect(spy).toHaveBeenCalledWith('access_token', response.toString());
//     expect(navigateSpy).toHaveBeenCalledWith(['/doctordetailpage']);
//     // expect(snackBarOpenSpy).toHaveBeenCalledWith('Login Successfull', 'ok'); // use the spy to check if the open method of the MatSnackBar service was called with the correct parameters
//     expect(TestBed.inject(MatSnackBar)).toHaveBeenCalledWith('Login Successfull', 'ok');
//   });
// });









// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { AdminComponent } from './admin.component';
// import { AdminService } from 'src/app/services/admin.service';

// describe('AdminComponent', () => {
//   let component: AdminComponent;
//   let httpTestingController: HttpTestingController;
//   let service:AdminService


  // let fixture: ComponentFixture<AdminComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ AdminComponent ]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(AdminComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ HttpClientTestingModule ],
//       providers: [ AdminService ]
//     });
  
//     service = TestBed.inject(AdminService);
//     httpTestingController = TestBed.inject(HttpTestingController);
//   });
  


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
