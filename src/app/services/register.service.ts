import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 

  constructor(private http:HttpClient){}

   registerpage(data:any)
   {
    return this.http.post("http://localhost:8000/patients",data);
   }
}
