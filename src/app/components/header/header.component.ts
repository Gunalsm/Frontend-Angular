import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorloginService } from 'src/app/services/doctorlogin.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private log:LoginService,private snack:MatSnackBar,private doclogin:DoctorloginService){}

  checkcondition(){
    if(this.log.isLoggedIn()){
      return true
    }
    return false
  }

  logout(){
    this.log.logout();
    this.snack.open("Logout Successfully","done")
    
  }
  doctorlogin(){
    this.doclogin.doclogin();
    this.snack.open("Logout Successfully","done")
    
  }

  btnClick()
  {
    console.log("btn Click");
    this.snack.open("Hey Welcome to this login")
  }
}
