import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logindata={
    username:"",
    password:""
  }

  
  passwordFieldType = 'password';

  constructor(private login:LoginService,private snak:MatSnackBar,private router:Router){}

  ngOnInit(){
    this.login.getTokenExpiration$().subscribe((expired) => {
      if (expired) {
        this.snak.open('Session Expired','ok')
        this.router.navigate(['loginpage'])
      }
    });
  }
  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  doSubmitForm(){
    console.log(this.logindata);

  if(this.logindata.username==='' || this.logindata.password==='')
  {
    this.snak.open("tabs can not be empty","done")
  }
  

  this.login.loginpage(this.logindata).subscribe(
    response=>{
      console.log(response);
        sessionStorage.setItem('access_token',JSON.stringify(response));
        if(sessionStorage.getItem("access_token")===null){
          return;
        }
        var t=JSON.parse(sessionStorage.getItem("access_token") || '{}')
        console.log(t.user.pat_id)
      
        this.snak.open("Login Successfull","ok")
        this.router.navigate(['/doctorpage'])

        // Write data to a file
        const date = new Date();
        const dateString = date.toLocaleDateString().replace(/\//g, '-');
        const timeString = date.toLocaleTimeString().replace(/:/g, '-');
        const fileName = `login-${dateString}_${timeString}.txt`;

        const data = `Username: ${this.logindata.username}\nPassword: ${this.logindata.password}\nLogin Time: ${date.toLocaleString()}\n`;
        const file = new File([data], fileName, { type: 'text/plain' });
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
      },
    error=>{
      console.log(error);
      if(error!=null){
        this.snak.open("User not exists please register","ok");
      }
    } 
  );
  this.login.loginpage(this.logindata).subscribe(
    (token) => {
      
      localStorage.setItem('token', token.access_token);
    },
    (err) => {
      console.error('Failed to login', err);
      alert('Incorrect username or password');
    }
  );
}
  
} 
  