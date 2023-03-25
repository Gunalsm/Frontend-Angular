import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import {  HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  


  data={
    pat_id:0,
    name:"",
    email:"",
    phone_number:"",
    password:"",
  
    
  
  }
  patientres :any
  constructor(private register:RegisterService,private snak:MatSnackBar,private router:Router,private http:HttpClient){}

  onRegister(){

    console.log(this.data);

    if(this.data.name=='' || this.data.phone_number=='' || this.data.password=='')
    {
      this.snak.open("fields can not be empty","ok");
      return;
    }

    this.register.registerpage(this.data).subscribe(
      response=>{
        console.log(response);
        this.snak.open("Registered Successfull","ok")
        this.patientres=response;
        this.router.navigate(['/loginpage'])

      // Write data to a file
      const data = JSON.stringify(response);
      const file = new File([data], 'registration.txt', { type: 'text/plain' });
      const url = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'registration.txt';
      link.click();
        
      },
    error=>{
      console.log(error);
      if(error!=null){
        this.snak.open("Email already exists","ok")
      }
    }
    );  
  } 

  increment(){
    this.data.pat_id++;
  }
 
}
