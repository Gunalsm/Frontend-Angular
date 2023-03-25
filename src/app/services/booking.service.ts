import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient,private router:Router ) { }


  getDoctorList(){
    return this.http.get('http://127.0.0.1:80/doctors')
  }

  bookappoints(doc:any){
    this.router.navigate(['/bookingpage'],
    {queryParams:{doc_id:doc.doc_id}

  });
  var doc_name = doc['name']
  var doc_catagory = doc['catagory']
  console.log(doc_name)
  console.log(doc_catagory)


  }
}

