import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorloginService {

  private baseUrl:string="http://127.0.0.1:80"

  constructor(private http:HttpClient,private router:Router) { }


  doctorloginpage(doctorlogindata:any)
   {
    return this.http.post(`${this.baseUrl}/login`,doctorlogindata);
   }
 



isLoggedIn(){
  let user = sessionStorage.getItem("access_token")
  return user
}
doclogin(){
  this.router.navigate(['/doctorbookedview'])
}
}
















 // doctorloginpage(doctorlogindata:any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/login`,doctorlogindata).pipe(
  //     catchError(error => of(error))
  //   );
  // }