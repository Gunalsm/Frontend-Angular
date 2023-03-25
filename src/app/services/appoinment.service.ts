import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'
// import { Appointment } from '../components/bookingpage/bookingpage.component';


@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {
 

  constructor(private http:HttpClient){}

   bookingpage(loaddata:any)
   {
    return this.http.post("http://localhost:60/appointment",loaddata);
   }



   
  }

  
  














  //  getSlots(doc_id:number, day: string): Observable<string[]> {
  //   return this.http.get<string[]>(`http://127.0.0.1:60/slots/${doc_id}/${day}`);
  // }
  


