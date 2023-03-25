import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppoinmentService } from 'src/app/services/appoinment.service';


@Component({
  standalone:true,
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./booked.component.css']
})
export class BookedComponent {

  loaddata={
    app_id:0,
    name:"",
    email:'',
    phone_number:"",
    date:"",
    doc_id:"",
    pat_id:"",
    slot_id:""
  }
  searchTerm: string = '';
  

  showdetail:any;
  docList:any;
  patList:any;
  dayslot:any;
  resappoint:any;

  slotdata:any
  days:string[];
  slots:any;

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router,private snak:MatSnackBar,private appoint:AppoinmentService){
    this.showdetail=[];
    this.patList=[];
    this.docList=[[]];
    this.dayslot=[];
    this.slotdata=[];
    this.days=[];
    this.slots=[];
  }

  ngOnInit():void{
    this.showbooked();
  }

  get filteredDoctors(){
    return this.showdetail.filter(book=>
      book.date.toLowerCase().includes(this.searchTerm.toLowerCase()) 
      // book.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      // book.doc_id.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

  }
  showbooked(){
    const t = JSON.parse(sessionStorage.getItem("access_token")|| '{}')
    const pat_id = t.user.pat_id
    console.log(pat_id)
      this.http.get(`http://127.0.0.1:60/appoint/${pat_id}`).subscribe(res=>{
        this.showdetail=res
        console.log(this.showdetail)
        for (let i = 0;i< this.showdetail.length;i++){
          var did = this.showdetail[i].doc_id

          this.http.get(`http://127.0.0.1:80/doctors/${did}`).subscribe(res=>{
            this.docList.push(res)
            console.log(this.docList)
          })
        }
      })
    
    this.appoint.bookingpage(this.loaddata).subscribe(res=>{
     

       console.log(res)
       this.resappoint=res;
      
  })
  }

  deleteAppointment(app_id:number){
    return this.http.delete(`http://127.0.0.1:60/appointments/${app_id}`).subscribe(res=>{
      console.log('res',res);
      
    })
  }
 

  onEdit(item:any){
    this.showdetail.forEach(element => {
      element.isEdit = false;
      
    });
    item.isEdit = true;

    this.docList.forEach(element=>{
      element.isEdit = false;
    })
    item.isEdit = true;

  }
  



updateAppointment(app_id: number) {
  const appointments = [...this.showdetail];
  const update = appointments.filter(appointment => appointment.app_id === app_id)[0];
  if (update) {
    this.http.put(`http://127.0.0.1:60/appointupdate/${app_id}`, update).subscribe(res => {
      console.log('res', res);
    });
  }
}
    }
  
