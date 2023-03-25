import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-doctorview',
  templateUrl: './doctorview.component.html',
  imports:[CommonModule],
  styleUrls: ['./doctorview.component.css']
})
export class DoctorviewComponent {

  data={
    name:"",
    catagory:""
  }

  bookeddetail:any;


  constructor(private http:HttpClient,private route:ActivatedRoute){

  }
  ngOnInit():void{
    this.showbook();
  }

  showbook(){
    const t = JSON.parse(sessionStorage.getItem("access_token")|| '{}')
    if (t && t.user && t.user.doc_id) {
      const doc_id = t.user.doc_id;
      console.log(doc_id);
      this.http.get(`http://127.0.0.1:60/appointments/${doc_id}`).subscribe(res=>{
        this.bookeddetail=res
        console.log(this.bookeddetail)
    
  
      })
    }
  }



}