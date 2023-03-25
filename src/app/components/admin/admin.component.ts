import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  admindata={
    username:"",
    password:""
  }

  passwordFieldType = 'password';

  constructor(private login:AdminService,private snak:MatSnackBar,private router:Router){}


  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }


  doSubmitForm(){
    console.log(this.admindata);

  if(this.admindata.username==='' || this.admindata.password==='')
  {
    this.snak.open("tabs can not be empty","done")
  }

  this.login.adminpage(this.admindata).subscribe(
    response=>{
      console.log(response);
        sessionStorage.setItem('access_token',response.toString());
        if(sessionStorage.getItem("access_token")===null){
          return;
        }
        this.snak.open("Login Successfull","ok")
        this.router.navigate(['/doctordetailpage'])
        
      },
  );

}
}
