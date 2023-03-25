import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorloginService } from 'src/app/services/doctorlogin.service';
import { BookingService } from 'src/app/services/booking.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  userList:any;
  searchTerm: string = '';


  constructor(private http:HttpClient,private doclog:DoctorloginService,private book:BookingService,private router:Router){
    this.userList=[];
    
  }
  ngOnInit():void{
    this.getUserList();
  }

  get filteredDoctors(){
    return this.userList.filter(user=>
      user.catagory.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

  }

  getUserList()
  {
    this.http.get('http://127.0.0.1/doctors').subscribe(res =>
        {
      console.log('res',res);
      this.userList=res;
      

    })
  }
  bookappoint(doc:any){
    this.book.bookappoints(doc);
  }

}





  // filterDoctorList() {
  //   if (this.searchCategory) {
  //     this.filteredUserList = this.userList.filter((doctor: any) => {
  //       return doctor.catagory.toLowerCase().includes(this.searchCategory.toLowerCase());
  //     });
  //   } else {
  //     this.filteredUserList = this.userList;
  //   }
  // // }
  // filterDoctorList(event: Event) {
  //   const inputValue = (event.target as HTMLInputElement).value;
  //   if (inputValue) {
  //     this.filteredUserList = this.userList.filter((doctor: any) => {
  //       return doctor.category.toLowerCase().includes(inputValue.toLowerCase());
  //     });
  //   } else {
  //     this.filteredUserList = this.userList;
  //   }
  // }

