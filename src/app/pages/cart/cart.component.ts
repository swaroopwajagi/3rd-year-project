import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { BooksService} from 'src/app/services/books.service';

declare var Razorpay : any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  value:any;
  maildata:any;
  details:any;
  nameofbook:any;
  options:any;
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private add :BooksService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  transferprice(p1:any, p2:any){
    this.value=p1;
   this.nameofbook=p2;
  }
  price(p:any)
  {
   this.options = {
     "key": "rzp_test_VwPB6RMDrbk701", // Enter the Key ID generated from the Dashboard
     "amount":p*100,
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
   new Razorpay(this.options).open();
  }
  rzp1:any;
  getpay(){
  
  this.rzp1=
  this.rzp1.open();
  }
  mail(a:any, b:any, c:any , d:any, e:any){
    this.maildata={name:a, email:b, address:c, booksname:d, prices:e};
    this.details = this.maildata;
  
    this.add.email(this.maildata).subscribe((res)=>{
      alert('plz check your mail');
    })
  }

}
