import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl:string="http://localhost:80"

  constructor(private http:HttpClient) { }


  adminpage(admindata:any)
   {
    return this.http.post(`${this.baseUrl}/admin`,admindata);
   }


isLoggedIn(){
  let user = sessionStorage.getItem("access_token")
  return user
}


}
