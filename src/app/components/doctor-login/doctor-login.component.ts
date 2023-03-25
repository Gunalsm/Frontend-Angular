import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorloginService } from 'src/app/services/doctorlogin.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {

  doctorlogindata={
    username:"",
    password:""
  }

  passwordFieldType = 'password';
  constructor(private doctorlogin:DoctorloginService,private snak:MatSnackBar,private router:Router,private route:ActivatedRoute){}

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  doctorsubmit(){
    console.log(this.doctorlogindata);
    

  if(this.doctorlogindata.username==='' || this.doctorlogindata.password==='')
  {
    this.snak.open("tabs can not be empty","done")
  }

  this.doctorlogin.doctorloginpage(this.doctorlogindata).subscribe(
    response=>{
      console.log(response);
        sessionStorage.setItem('access_token',JSON.stringify(response));
        if(sessionStorage.getItem("access_token")===null){
          return;
        }
        var t=JSON.parse(sessionStorage.getItem("access_token") || '{}')
        console.log(t.user.doc_id)
        this.snak.open("Login Successfull","ok")
        this.router.navigate(['/doctorbookedview'])
        
      },
    error=>{
      console.log(error);
      if(error!=null){
        this.snak.open("User not exists","ok");
      }
    } 
  );
  }

}
