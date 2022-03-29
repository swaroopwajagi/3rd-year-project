import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cao',
  templateUrl: './cao.component.html',
  styleUrls: ['./cao.component.css']
})
export class CaoComponent implements OnInit {
   a:any;
   display:any[]=[];
  constructor() { }
  verify(data:any){
    this.a=data;
  }
  getdata(data:any){
    this.display.push({author:data.author,price:data.price});
  }
  ngOnInit(): void {
  }

}
