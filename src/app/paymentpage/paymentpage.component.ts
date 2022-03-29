import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
declare var Razorpay : any;
@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
  
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  customer(detail:any){
    this.auth.payment(detail).subscribe((res)=>{
      alert("data got succefully added");
    })
  }
  options = {
    "key": "rzp_test_VwPB6RMDrbk701", // Enter the Key ID generated from the Dashboard
    "amount":"90000",
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", 
    "handler": function (response:any){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }

};
rzp1:any;
getpay(){
  
  this.rzp1=new Razorpay(this.options);
  this.rzp1.open();
}
}
