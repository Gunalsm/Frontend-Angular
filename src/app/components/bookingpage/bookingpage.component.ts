import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']

})
export class BookingpageComponent {

  

  isPaymentDone : boolean = false;
  appointmentEnabled :boolean =false;

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


 resappoint:any
 slotdata:any
 days:string[];
 slots:any[];
 dayslot:any[];


constructor(private appoint:AppoinmentService,private snak:MatSnackBar,private router:Router,private route: ActivatedRoute,private http:HttpClient,private Book:BookingService){
  this.slotdata=[]
  this.days=[]
  this.slots=[]
  this.dayslot=[]

}

ngOnInit():void{

  this.getDays();
 
  
}



paynow(){
  this.isPaymentDone = true;
}
enableBooking() {
  this.appointmentEnabled = true;
}


onBook(){
  console.log(this.loaddata)
  this.route.queryParams.subscribe((queryParam)=>{
    this.loaddata.doc_id=queryParam['doc_id'];
    var t = JSON.parse(sessionStorage.getItem("access_token")|| '{}')
    this.loaddata.pat_id = t.user.pat_id
    
  });

    if(this.loaddata.name=='' || this.loaddata.email=='' || this.loaddata.phone_number=='' || this.loaddata.slot_id=='' ||  this.loaddata.date=='')
    {
      this.snak.open("fields can not be empty","ok");
      return;
    }
    this.appoint.bookingpage(this.loaddata).subscribe(res=>{
      this.resappoint=res;
      this.snak.open("Booked Successfully","ok")

      const bookedSlot = this.slots.find((slot) => slot.slot_id === this.loaddata.slot_id);
      if (bookedSlot) {

        bookedSlot.slotAlreadyBooked = true;
        this.snak.open('slot already booked','ok')
        
      }


      this.router.navigate(['/bookedpage']
      ,{queryParams:{app_id:this.resappoint.app_id}});
    },
    (error)=>{
      console.log(error);
      this.snak.open("Failed to book Appointment","ok");
    }
    )
    
  
}  
    getDays(){
      this.route.queryParams.subscribe((queryParam)=>{
        var did=queryParam['doc_id'];
        this.http.get(`http://127.0.0.1:60/slots/${did}`).subscribe(
          res=>{
            console.log('res',res);
            this.slotdata=res;
            for(let i = 0; i < this.slotdata.length; i++){
              this.days.push(this.slotdata[i].days)
            }
            this.days = (Array.from(new Set(this.days)))
            console.log(this.days)
          })
      });
      
    }
    getSlots(data:any){
      this.route.queryParams.subscribe((queryParam)=>{
        var did=queryParam['doc_id'];
        var day=data
        console.log(data)
        this.http.get<any[]>(`http://127.0.0.1:60/slots/${did}/${day}`).subscribe(
          (res:any[])=>{
            this.slots=res.map((slot:any)=>({ ...slot, isBooked:false}));
            console.log(this.slots)
            this.dayslot=[]
            for(let i=0;i<this.slots.length;i++){
              this.dayslot.push(this.slots[i].slots)
            }
            console.log(this.dayslot)
           
           
        },
        err =>{
          console.log(err)
        }
        );
        
      }     
        );
        
      };
      minDate(){
        var dtToday = new Date(); 
        var month = (dtToday.getMonth()+1);
        var year = dtToday.getFullYear();
        var day = dtToday.getDate()+1;
        var newmonth = '';
        var newday = '';
      
        if((month.toString()).length == 1){
          newmonth = '0' + month.toString();
           
        }
        if((month.toString()).length == 2){
          
          newmonth = month.toString();
        }
      
        if((day.toString() ).length == 1){
          
          newday = '0' + day.toString();
        }
        if((day.toString() ).length == 2){
          
          newday = day.toString();
        }
      
        var minDate = year.toString() + '-' + newmonth + '-' + newday;
        return minDate
      
      
      }
      
      maxDate(){
        var dtToday = new Date();  
        var maxdate = new Date();
        maxdate.setDate(dtToday.getDate()+5)
        var maxnewmonth = '';
        var maxnewdate='';
      
        if(((maxdate.getMonth()+1).toString()).length == 1){
          maxnewmonth = '0' + (maxdate.getMonth()+1).toString()
        }
        if(((maxdate.getMonth()+1).toString()).length == 2){
          maxnewmonth = (maxdate.getMonth()+1).toString()
        }
        if(((maxdate.getDate()+1).toString()).length == 1){
          maxnewdate = '0' + (maxdate.getDate()).toString()
        }
        if(((maxdate.getDate()+1).toString()).length == 2){
          maxnewdate = (maxdate.getDate()).toString()
        }
      
        var maxDate = (maxdate.getFullYear()).toString() + '-' + maxnewmonth + "-" + maxnewdate
        return maxDate
      
      }
        
  increment(){
    this.loaddata.app_id++;
  }
}
  





































// loadSlots() {
//   this.http.get(`http://127.0.0.1:60/slots/${this.loaddata.doc_id}/${this.loaddata.date}`).subscribe(
//       (res) => {
//         this.dayslot = res;
//       })
//     }


// onBook() {
//   console.log(this.loaddata);
//   this.route.queryParams.subscribe((queryParam) => {
//     this.loaddata.doc_id = queryParam['doc_id'];
//     var t = JSON.parse(sessionStorage.getItem('access_token') || '{}');
//     this.loaddata.pat_id = t.user.pat_id;
//   });

//   if (this.loaddata.name == '' || this.loaddata.email == '' || this.loaddata.phone_number == '' || this.loaddata.slot_id == '' || this.loaddata.date == '') {
//     this.snak.open('Fields cannot be empty', 'ok');
//     return;
//   }

//   const selectedSlot = this.slots.find(slot => slot.slot_id === this.loaddata.slot_id);

//   if (selectedSlot && selectedSlot.isBooked) {
//     this.snak.open('Slot already booked, please choose another one', 'ok');
//     return;
//   }

//   this.appoint.bookingpage(this.loaddata).subscribe(
//     (res) => {
//       this.resappoint = res;
//       this.snak.open('Booked Successfully', 'ok');

//       if (selectedSlot) {
//         selectedSlot.isBooked = true;
//       }

//       this.router.navigate(['/bookedpage'], { queryParams: { app_id: this.resappoint.app_id } });
//     },
//     (error) => {
//       console.log(error);
//       this.snak.open('Failed to book Appointment', 'ok');
//     }
//   );
// }

 // this.appoint.bookingpage(this.loaddata).subscribe(res=>{
     
    
    //   this.resappoint=res;
    //   this.snak.open("Booked Successfully","ok")

    //   const bookedSlot = this.slots.find(slot => slot.slot_id === this.loaddata.slot_id);
    //   if (bookedSlot) {

    //     bookedSlot.isBooked = true;
    //     this.snak.open('slot already booked','ok')
        
    //   }


    //   this.router.navigate(['/bookedpage']
    //   ,{queryParams:{app_id:this.resappoint.app_id}});
    // },
    // (error)=>{
    //   console.log(error);
    //   this.snak.open("Failed to book Appointment","ok");
    // }
    // )