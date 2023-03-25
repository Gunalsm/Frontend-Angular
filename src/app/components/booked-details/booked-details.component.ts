import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as html2pdf from 'html2pdf.js';


@Component({
  standalone:true,
  selector: 'app-booked-details',
  templateUrl: './booked-details.component.html',
  imports:[CommonModule],
  styleUrls: ['./booked-details.component.css']
})
export class BookedDetailsComponent {

  data={
    name:"",
    catagory:""
  }

  showbookeddetail:any;
  doc_data:any;
  pat_data:any;

  constructor(private route:ActivatedRoute,private http:HttpClient){

  }
  ngOnInit():void{
    this.showbook();
  }

  showbook(){
    this.route.queryParams.subscribe((queryparam)=>{
      var app_id = queryparam['app_id']
      this.http.get(`http://127.0.0.1:60/appointment/${app_id}`).subscribe(res=>{
        this.showbookeddetail=res
      
      var doc_id=this.showbookeddetail.doc_id
      this.http.get(`http://127.0.0.1/doctors/${doc_id}`).subscribe(res=>{
        this.doc_data=res
        console.log(this.doc_data)
      })
      var pat_id = this.showbookeddetail.pat_id
      this.http.get(`http://127.0.0.1:8000/patients/${pat_id}`).subscribe(res=>{
        this.pat_data=res
        console.log(this.pat_data)
  
      })
    })
  })
}

generatePDF() {
  const element = document.getElementById('pdf-content');
  html2pdf().from(element).save();

}
}



