import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
import { DoctorloginService } from 'src/app/services/doctorlogin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookingService } from 'src/app/services/booking.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
describe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule ,DoctorComponent],
      declarations: [],
      providers: [ DoctorloginService, BookingService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get user list on init', () => {
  //   const http = TestBed.inject(HttpClientTestingModule);
  //   const httpSpy = jest.spyOn(http, 'get').mockReturnValueOnce(of([]));
  //   component.ngOnInit();
  //   expect(httpSpy).toHaveBeenCalledWith('http://127.0.0.1/doctors');
  // });
  it('should get user list on init', () => {
    const http = TestBed.inject(HttpClient);
    const httpSpy = jest.spyOn(http, 'get').mockReturnValueOnce(of([]));
    component.ngOnInit();
    expect(httpSpy).toHaveBeenCalledWith('http://127.0.0.1/doctors');
  });

  it('should filter doctor list based on search term', () => {
    component.userList = [
      { id: 1, name: 'Dr. A', catagory: 'Cardiology' },
      { id: 2, name: 'Dr. B', catagory: 'Dermatology' },
      { id: 3, name: 'Dr. C', catagory: 'Cardiology' },
    ];
    component.searchTerm = 'car';
    expect(component.filteredDoctors).toEqual([
      { id: 1, name: 'Dr. A', catagory: 'Cardiology' },
      { id: 3, name: 'Dr. C', catagory: 'Cardiology' },
    ]);
  });

  it('should call bookappoint when booking is clicked', () => {
    const doctor = { id: 1, name: 'Dr. A', catagory: 'Cardiology' };
    const book = TestBed.inject(BookingService);
    const bookSpy = jest.spyOn(book, 'bookappoints');
    component.bookappoint(doctor);
    expect(bookSpy).toHaveBeenCalledWith(doctor);
  });
});








// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DoctorComponent } from './doctor.component';

// describe('DoctorComponent', () => {
//   let component: DoctorComponent;
//   let fixture: ComponentFixture<DoctorComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DoctorComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DoctorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
