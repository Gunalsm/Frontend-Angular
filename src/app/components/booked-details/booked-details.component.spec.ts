import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookedDetailsComponent } from './booked-details.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as html2pdf from 'html2pdf.js';
import { HttpClient } from '@angular/common/http';

describe('BookedDetailsComponent', () => {
  let component: BookedDetailsComponent;
  let fixture: ComponentFixture<BookedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule,BookedDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: {
              subscribe: (fn: (value: any) => void) =>
                fn({
                  app_id: 1,
                }),
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call showbook method', () => {
    spyOn(component, 'showbook');
    component.ngOnInit();
    expect(component.showbook).toHaveBeenCalled();
  });

  it('should call http.get for appointment details', () => {
    const http = TestBed.inject(HttpClient);
    spyOn(http, 'get').and.callThrough();
    component.showbook();
    expect(http.get).toHaveBeenCalledWith('http://127.0.0.1:60/appointment/1');
  });

  it('should call http.get for doctor details', () => {
    const http = TestBed.inject(HttpClient);
    spyOn(http, 'get').and.callThrough();
    component.showbook();
    expect(http.get).toHaveBeenCalledWith('http://127.0.0.1/doctors/undefined');
  });

  it('should call http.get for patient details', () => {
    const http = TestBed.inject(HttpClient);
    spyOn(http, 'get').and.callThrough();
    component.showbook();
    expect(http.get).toHaveBeenCalledWith('http://127.0.0.1:8000/patients/undefined');
  });
  
  // it('should call http.get for patient details', () => {
  //   const http = TestBed.inject(HttpClientTestingModule);
  //   spyOn(http, 'get').and.callThrough();
  //   component.showbook();
  //   expect(http.get).toHaveBeenCalledWith('http://127.0.0.1:8000/patients/undefined');
  // });

  it('should call html2pdf.from method', () => {
    const spy = spyOn(html2pdf.prototype, 'from');
    component.generatePDF();
    expect(spy).toHaveBeenCalled();
  });
});




// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { BookedDetailsComponent } from './booked-details.component';

// describe('BookedDetailsComponent', () => {
//   let component: BookedDetailsComponent;
//   let fixture: ComponentFixture<BookedDetailsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ BookedDetailsComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(BookedDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
