import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private snak:MatSnackBar,private router:Router){}

  amount(){
    
    // this.snak.open('Payment done','ok')
    
    
  }

}
