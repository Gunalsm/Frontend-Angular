import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppoinmentService } from 'src/app/services/appoinment.service';

import { BookedComponent } from './booked.component';

describe('BookedComponent', () => {
  let component: BookedComponent;
  let fixture: ComponentFixture<BookedComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BookedComponent
      ],
      providers: [
        MatSnackBar,
        AppoinmentService
      ]
    })
    .compileComponents();
    component = TestBed.inject(BookedComponent);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    console.log(httpTestingController); 
    httpTestingController.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the booked appointments from the server', () => {
    // Arrange
    const mockAppointments = [{
      app_id: 1,
      name: 'John',
      email: 'john@example.com',
      phone_number: '1234567890',
      date: '2022-01-01',
      doc_id: 1,
      pat_id: 1,
      slot_id: 1
    }];
    const t = { user: { pat_id: 1 } };
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify(t));
    const appointmentsUrl = 'http://127.0.0.1:60/appoint/1';
    const doctorsUrl = 'http://127.0.0.1:80/doctors/1';
    const appointmentsRequest = httpTestingController.expectOne(appointmentsUrl);
    const doctorsRequest = httpTestingController.expectOne(doctorsUrl);
    appointmentsRequest.flush(mockAppointments);
    doctorsRequest.flush({ doc_id: 1, name: 'Dr. Smith' });

    // Act
    component.showbooked();

    // Assert
    expect(component.showdetail).toEqual(mockAppointments);
    expect(component.docList).toEqual([{ doc_id: 1, name: 'Dr. Smith' }]);
  });

  it('should delete an appointment', () => {
    // Arrange
    const app_id = 1;
    const deleteUrl = `http://127.0.0.1:60/appointments/${app_id}`;
    const deleteRequest = httpTestingController.expectOne(deleteUrl);

    // Act
    component.deleteAppointment(app_id);

    // Assert
    expect(deleteRequest.request.method).toEqual('DELETE');
  });
})






// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { RouterTestingModule } from '@angular/router/testing';
// import { BookedComponent } from './booked.component';
// import { HttpClient } from '@angular/common/http';
// import { AppoinmentService } from 'src/app/services/appoinment.service';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

// // describe('BookedComponent', () => {
// //   let component: BookedComponent;
// //   let fixture: ComponentFixture<BookedComponent>;
// //   let httpMock: HttpTestingController;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [ BookedComponent ],
// //       imports: [ HttpClientTestingModule, RouterTestingModule ],
// //       providers: [ MatSnackBar ]
// //     })
// //     .compileComponents();

// //     fixture = TestBed.createComponent(BookedComponent);
// //     component = fixture.componentInstance;
// //     httpMock = TestBed.inject(HttpTestingController);
// //   });
// describe('BookedComponent', () => {
//   let component: BookedComponent;
//   let fixture: ComponentFixture<BookedComponent>;
//   let httpMock: HttpTestingController;
//   let httpClient: HttpClient;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ BookedComponent ],
//       imports: [ HttpClientTestingModule, MatSnackBarModule ],
//       providers: [ AppoinmentService ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BookedComponent);
//     component = fixture.componentInstance;
//     httpClient = TestBed.inject(HttpClient);
//     httpMock = TestBed.inject(HttpTestingController);
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should fetch and assign booked details to showdetail property', () => {
//     const mockResponse = [
//       {
//         app_id: 1,
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         phone_number: '1234567890',
//         date: '2022-03-05',
//         doc_id: 1,
//         pat_id: 1,
//         slot_id: 1
//       },
//       {
//         app_id: 2,
//         name: 'Jane Doe',
//         email: 'janedoe@example.com',
//         phone_number: '9876543210',
//         date: '2022-03-06',
//         doc_id: 2,
//         pat_id: 1,
//         slot_id: 2
//       }
//     ];

//     component.showbooked();
//     const req = httpMock.expectOne(`http://127.0.0.1:60/appoint/1`);
//     expect(req.request.method).toBe('GET');
//     req.flush(mockResponse);

//     expect(component.showdetail).toEqual(mockResponse);
//   });
// });







// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { BookedComponent } from './booked.component';

// describe('BookedComponent', () => {
//   let component: BookedComponent;
//   let fixture: ComponentFixture<BookedComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ BookedComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(BookedComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
