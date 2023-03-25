import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError, timer } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


interface LoginResponse {
  access_token:string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
  });


  
  private baseUrl:string="http://localhost:8000"
  private readonly tokenExpiration$ = new BehaviorSubject<boolean>(false);
  

  constructor(private http:HttpClient,private router:Router) {}
  
  getTokenExpiration$(): Observable<boolean> {
    return this.tokenExpiration$.asObservable();
  }

  loginpage(logindata:any)
   {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`,logindata,{headers:this.headers}).pipe(
      catchError((err) => {
        console.error('Failed to login', err);
        return throwError(err);
      }),
      map((token) => {
        const ACCESS_TOKEN_EXPIRE_MINUTES = 2;
        // Start timer to emit token expiration after 30 minutes
        const expirationTime = ACCESS_TOKEN_EXPIRE_MINUTES * 60 * 1000;
        timer(expirationTime).pipe(
          switchMap(() => {
            // Emit token expiration and logout
            this.tokenExpiration$.next(true);
            this.logout();
            return throwError('Token expired');
          })
        ).subscribe();
        return token;
      })
    );
   }

isLoggedIn(){
  let user = sessionStorage.getItem("access_token")
  return user
}

logout(){
  sessionStorage.removeItem('token');
  sessionStorage.clear();
  this.router.navigate['/logoutpage'];
}
}