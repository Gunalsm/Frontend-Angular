import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DoctorviewComponent } from './doctorview.component';
import { ActivatedRoute } from '@angular/router';

describe('DoctorviewComponent', () => {
  let component: DoctorviewComponent;
  let fixture: ComponentFixture<DoctorviewComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // mock doc_id
              }
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorviewComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch booked details from the API and assign them to bookeddetail property', () => {
    const mockData = [
      {
        id: 1,
        user_id: 1,
        doctor_id: 1,
        date: '2022-05-01',
        time: '10:00:00',
        created_at: '2022-03-01T07:30:00.000Z',
        updated_at: '2022-03-01T07:30:00.000Z',
        user: {
          id: 1,
          name: 'John',
          email: 'john@example.com',
          password: 'password',
          created_at: '2022-03-01T07:30:00.000Z',
          updated_at: '2022-03-01T07:30:00.000Z'
        }
      }
    ];

    component.showbook();

    const request = httpMock.expectOne(`http://127.0.0.1:60/appointments/1`);
    expect(request.request.method).toBe('GET');

    request.flush(mockData);

    expect(component.bookeddetail).toEqual(mockData);
  });
});


// import { CommonModule } from '@angular/common';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { of } from 'rxjs';
// import { DoctorviewComponent } from './doctorview.component';

// describe('DoctorviewComponent', () => {
//   let component: DoctorviewComponent;
//   let fixture: ComponentFixture<DoctorviewComponent>;
//   let httpMock: HttpTestingController;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DoctorviewComponent ],
//       imports: [ CommonModule, HttpClientTestingModule ],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: {
//               data: {
//                 name: 'Doctor 1',
//                 category: 'category 1'
//               }
//             }
//           }
//         }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DoctorviewComponent);
//     component = fixture.componentInstance;
//     httpMock = TestBed.inject(HttpTestingController);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should fetch booked details from the API and assign them to bookeddetail property', () => {
//     const mockResponse = { data: [ { id: 1, name: 'John', date: '2023-03-02', time: '10:00 AM' } ] };
//     const t = JSON.stringify({ user: { doc_id: 1 }, access_token: 'xyz' });
//     sessionStorage.setItem('access_token', t);
//     component.showbook();
//     const req = httpMock.expectOne(`http://127.0.0.1:60/appointments/1`);
//     expect(req.request.method).toEqual('GET');
//     req.flush(mockResponse);
//     expect(component.bookeddetail).toEqual(mockResponse);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });
// });










// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DoctorviewComponent } from './doctorview.component';

// describe('DoctorviewComponent', () => {
//   let component: DoctorviewComponent;
//   let fixture: ComponentFixture<DoctorviewComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DoctorviewComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DoctorviewComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
