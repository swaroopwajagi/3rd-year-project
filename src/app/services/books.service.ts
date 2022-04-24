import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  maths(data:any){
    return this.http.post("http://localhost:8080/sub1/maths",data);
  }
  email(data:any)
  {
    return this.http.post("http://localhost:8080/mails/sendmail",data)
  }
  getmath(){
    return this.http.get("http://localhost:8080/sub1/dbdata")
  
  }
  cao(data:any){
    return this.http.post("http://localhost:8080/sub2/cao",data)
  }
  getcao(){
    return this.http.get("http://localhost:8080/sub2/dbdata2")
  }
  clang(data:any){
    return this.http.post("http://localhost:8080/sub3/clang",data)
  }
  getclang(){
    return this.http.get("http://localhost:8080/sub3/dbdata3")
  }
  deam(data:any){
    return this.http.post("http://localhost:8080/sub4/deam",data)
  }
  getdeam(){
    return this.http.get("http://localhost:8080/sub4/dbdata4")
  }
  ethics(data:any){
    return this.http.post("http://localhost:8080/sub5/ethics",data)
  }
  getethics(){
    return this.http.get("http://localhost:8080/sub5/dbdata5")
  }
  dmgt(data:any){
    return this.http.post("http://localhost:8080/sem4/sub1",data);
  }
  getdmgt(){
    return this.http.get("http://localhost:8080/sem4/dbdata6");
  }
}
