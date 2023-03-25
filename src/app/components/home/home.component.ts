import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userList:any;


  btnClick()
  {
    console.log("btn Click");
    this.snack.open("Hey Welcome to this login")
  }

  constructor(private httpClient:HttpClient,public router:Router,private snack:MatSnackBar){
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
book(){
  alert("Please login to book appointment");
  this.router.navigate(['/loginpage'])
}
view(){
  alert("Please login to view doctors");
  this.router.navigate(['/loginpage'])
}



}
