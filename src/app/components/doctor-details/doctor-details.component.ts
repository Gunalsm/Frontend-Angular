import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  standalone:true,
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  imports:[CommonModule],
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent {
  userList:any;

  constructor(private httpClient:HttpClient,private router:Router){
    this.userList=[];
  }
  ngOnInit():void{
    this.getUserList()
  }

  getUserList()
  {
    this.httpClient.get('http://127.0.0.1/doctors').subscribe(res =>
        {
      console.log('res',res);
      this.userList=res;

    })
  
}
  }

