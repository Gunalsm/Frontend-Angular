import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

import { DoctorDetailsComponent } from './doctor-details.component';

describe('DoctorDetailsComponent', () => {
  let component: DoctorDetailsComponent;
  let fixture: ComponentFixture<DoctorDetailsComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        DoctorDetailsComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailsComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user list', () => {
    component.getUserList();
    const req = httpTestingController.expectOne('http://127.0.0.1/doctors');
    expect(req.request.method).toEqual('GET');
    req.flush([ { name: 'Vignesh' }, { name: 'Jane' } ]);
    expect(component.userList).toEqual([ { name: 'Vignesh' }, { name: 'Jane' } ]);
  });

  // it('should fetch user list on init', () => {
  //   const mockUserList = [
  //     { id: 1, name: 'John Doe' },
  //     { id: 2, name: 'Jane Doe' },
  //   ];
  //   const req = httpTestingController.expectOne('http://127.0.0.1/doctors');
  //   req.flush(mockUserList);

  //   expect(component.userList).toEqual(mockUserList);
  // });
});




// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DoctorDetailsComponent } from './doctor-details.component';

// describe('DoctorDetailsComponent', () => {
//   let component: DoctorDetailsComponent;
//   let fixture: ComponentFixture<DoctorDetailsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DoctorDetailsComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DoctorDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
