import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
// import { spyOn } from '@angular/core/testing';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registerService: RegisterService;
  let snackBar: MatSnackBar;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MatSnackBar, useValue: { open: jest.fn() } },
        { provide: RegisterService, useValue: { registerpage: jest.fn() } },
        { provide: Router, useValue: { navigate: jest.fn() } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    registerService = TestBed.inject(RegisterService);
    snackBar = TestBed.inject(MatSnackBar);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onRegister', () => {
    it('should display error message if fields are empty', () => {
      spyOn(snackBar, 'open');
      component.onRegister();
      expect(snackBar.open).toHaveBeenCalledWith('fields can not be empty', 'ok');
    });

    it('should call RegisterService and display success message if registration is successful', () => {
      const response = { pat_id: 1, name: 'John', email: 'john@example.com', phone_number: '1234567890' };
      const registerSpy = jest.spyOn(registerService, 'registerpage').mockReturnValue(of(response));
      jest.spyOn(snackBar, 'open');
      jest.spyOn(router, 'navigate');
      // spyOn(FileSaver, 'saveAs');

      component.data.name = 'John';
      component.data.email = 'john@example.com';
      component.data.phone_number = '1234567890';
      component.data.password = 'password';
      component.onRegister();

      expect(registerSpy).toHaveBeenCalledWith(component.data);
      expect(snackBar.open).toHaveBeenCalledWith('Registered Successfull', 'ok');
      expect(router.navigate).toHaveBeenCalledWith(['/loginpage']);
      // expect(FileSaver.saveAs).toHaveBeenCalled();
    });

    it('should display error message if registration fails', () => {
      const errorMessage = 'Email already exists';
      const registerSpy = jest.spyOn(registerService, 'registerpage').mockReturnValue(throwError(errorMessage));
      jest.spyOn(snackBar, 'open');
      jest.spyOn(router, 'navigate');

      component.data.name = 'John';
      component.data.email = 'john@example.com';
      component.data.phone_number = '1234567890';
      component.data.password = 'password';
      component.onRegister();

      expect(registerSpy).toHaveBeenCalledWith(component.data);
      expect(snackBar.open).toHaveBeenCalledWith('Email already exists', 'ok');
      expect(router.navigate).not.toHaveBeenCalled();
    });
  });
});




// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RegisterComponent } from './register.component';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { RegisterService } from 'src/app/services/register.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;
//   let registerService: RegisterService;
//   let snackBar: MatSnackBar;
//   let httpClient: HttpClient;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterTestingModule],
//       declarations: [RegisterComponent],
//       providers: [RegisterService, MatSnackBar],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     registerService = TestBed.inject(RegisterService);
//     snackBar = TestBed.inject(MatSnackBar);
//     httpClient = TestBed.inject(HttpClient);
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('onRegister', () => {
//     let registerSpy: jest.SpyInstance;

//     beforeEach(() => {
//       registerSpy = jest.spyOn(registerService, 'registerpage');
//     });

//     afterEach(() => {
//       registerSpy.mockReset();
//     });

//     afterAll(() => {
//       registerSpy.mockRestore();
//     });

//     it('should call register service with valid data and display success message', () => {
//       const response = { success: true };
//       registerSpy.mockReturnValue(of(response));
//       const snackBarSpy = jest.spyOn(snackBar, 'open');
//       // const routerSpy = jest.spyOn(component.router, 'navigate');
//       const routerSpy = jest.spyOn((component as any).router, 'navigate');


//       component.data.name = 'Test User';
//       component.data.email = 'testuser@example.com';
//       component.data.phone_number = '1234567890';
//       component.data.password = 'password';

//       component.onRegister();

//       expect(registerSpy).toHaveBeenCalledTimes(1);
//       expect(registerSpy).toHaveBeenCalledWith(component.data);

//       expect(snackBarSpy).toHaveBeenCalledTimes(1);
//       expect(snackBarSpy).toHaveBeenCalledWith('Registered Successfull', 'ok');

//       expect(routerSpy).toHaveBeenCalledTimes(1);
//       expect(routerSpy).toHaveBeenCalledWith(['/loginpage']);
//     });

//     it('should display error message if register service throws error', () => {
//       const errorMessage = 'Email already exists';
//       registerSpy.mockImplementation(() => {
//         throw new Error(errorMessage);
//       });
//       const snackBarSpy = jest.spyOn(snackBar, 'open');

//       component.data.name = 'Test User';
//       component.data.email = 'testuser@example.com';
//       component.data.phone_number = '1234567890';
//       component.data.password = 'password';

//       component.onRegister();

//       expect(registerSpy).toHaveBeenCalledTimes(1);
//       expect(registerSpy).toHaveBeenCalledWith(component.data);

//       expect(snackBarSpy).toHaveBeenCalledTimes(1);
//       expect(snackBarSpy).toHaveBeenCalledWith(errorMessage, 'ok');
//     });

//     it('should display error message if form data is invalid', () => {
//       const snackBarSpy = jest.spyOn(snackBar, 'open');

//       component.onRegister();

//       expect(registerSpy).not.toHaveBeenCalled();

//       expect(snackBarSpy).toHaveBeenCalledTimes(1);
//       expect(snackBarSpy).toHaveBeenCalledWith('fields can not be empty', 'ok');
//     });
//   });
// })






















// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { RegisterComponent } from './register.component';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ RegisterComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
