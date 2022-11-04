import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { BooksService} from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api.service';
declare var Razorpay : any;

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit {

  a:any;
  options:any;
  res:any;
  display:any;
  product:any;
  details:any;
 value:any;
 nameofbook:any;
 maildata:any;
 public productList : any ;
 public filterCategory : any
 searchKey:string ="";
 constructor(private add : BooksService, private cartService : CartService, private api:ApiService, private auth:AuthService) { }
 uploadata(books:any){
 
    console.warn(books);
    this.add.toc(books).subscribe((res)=>{
      alert("book data is added");
    })
   
  }
 
 getdata(data:any){
   this.display.push({author:data.author,price:data.price});
 }
 ngOnInit(): void {
   this.display=this.add.gettoc().subscribe(res=>{
     this.product = res;
     console.warn(this.product);
   });
   this.api.getProduct()
 .subscribe(res=>{
   this.productList = res;
   this.filterCategory = res;
   this.productList.forEach((a:any) => {
     if(a.category ==="women's clothing" || a.category ==="men's clothing"){
       a.category ="fashion"
     }
     Object.assign(a,{quantity:1,total:a.price});
   });
   console.log(this.productList)
 });
   
 }
 verify(data:any){
 
   if(data=='0012'){
     this.res=true;
     console.warn(this.res);
   }
   else{
     this.res=false;
     alert('invalid key');
   }
 }
 mail(a:any, b:any, c:any , d:any, e:any){
   this.maildata={name:a, email:b, address:c, booksname:d, prices:e};
   this.details = this.maildata;
 
   this.add.email(this.maildata).subscribe((res)=>{
     alert('plz check your mail');
   })
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

 transferprice(p1:any, p2:any){
   this.value=p1;
  this.nameofbook=p2;
 }
 rzp1:any;
getpay(){

this.rzp1=
this.rzp1.open();
}
 addtocart(item: any){
   this.cartService.addtoCart(item);
 }



}
