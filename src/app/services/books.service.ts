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
  ami(data:any){
    return this.http.post("http://localhost:8080/sem4/sub2",data);
  }
  getami(){
    return this.http.get("http://localhost:8080/sem4/dbdata7");
  }
  toc(data:any){
    return this.http.post("http://localhost:8080/sem4/sub3",data);
  }
  gettoc(){
    return this.http.get("http://localhost:8080/sem4/dbdata8");
  }
  dspd(data:any){
    return this.http.post("http://localhost:8080/sem4/sub4",data);
  }
  getdspd(){
    return this.http.get("http://localhost:8080/sem4/dbdata9");
  }
  imfl(data:any){
    return this.http.post("http://localhost:8080/sem4/sub5",data);
  }
  getimfl(){
    return this.http.get("http://localhost:8080/sem4/dbdata10");
  }
  dcom(data:any){
    return this.http.post("http://localhost:8080/sem5/sub1",data);
  }
  getdcom(){
    return this.http.get("http://localhost:8080/sem5/dbdata11");
  }
  oom(data:any){
    return this.http.post("http://localhost:8080/sem5/sub3",data);
  }
  getoom(){
    return this.http.get("http://localhost:8080/sem5/dbdata13");
  }
  dbms(data:any){
    return this.http.post("http://localhost:8080/sem5/sub2",data);
  }
  getdbms(){
    return this.http.get("http://localhost:8080/sem5/dbdata12");
  }
  daa(data:any){
    return this.http.post("http://localhost:8080/sem5/sub4",data);
  }
  getdaa(){
    return this.http.get("http://localhost:8080/sem5/dbdata14");
  }
  os(data:any){
    return this.http.post("http://localhost:8080/sem5/sub5",data);
  }
  getos(){
    return this.http.get("http://localhost:8080/sem5/dbdata15");
  }
  cg(data:any){
    return this.http.post("http://localhost:8080/sem6/sub1",data);
  }
  getcg(){
    return this.http.get("http://localhost:8080/sem6/dbdata16");
  }
  esd(data:any){
    return this.http.post("http://localhost:8080/sem6/sub2",data);
  }
  getesd(){
    return this.http.get("http://localhost:8080/sem6/dbdata17");
  }
  sepm(data:any){
    return this.http.post("http://localhost:8080/sem6/sub3",data);
  }
  getsepm(){
    return this.http.get("http://localhost:8080/sem6/dbdata18");
  }
  fe(data:any){
    return this.http.post("http://localhost:8080/sem6/sub4",data);
  }
  getfe(){
    return this.http.get("http://localhost:8080/sem6/dbdata19");
  }
  cn(data:any){
    return this.http.post("http://localhost:8080/sem6/sub5",data);
  }
  getcn(){
    return this.http.get("http://localhost:8080/sem6/dbdata20");
  }
  compiler(data:any){
    return this.http.post("http://localhost:8080/sem7/sub1",data);
  } 
  getcompiler(){
    return this.http.get("http://localhost:8080/sem7/dbdata21");
  }
  ai(data:any){
    return this.http.post("http://localhost:8080/sem7/sub2",data);
  } 
  getai(){
    return this.http.get("http://localhost:8080/sem7/dbdata22");
  }
  ele1(data:any){
    return this.http.post("http://localhost:8080/sem7/sub3",data);
  } 
  getele1(){
    return this.http.get("http://localhost:8080/sem7/dbdata23");
  }
  ele2(data:any){
    return this.http.post("http://localhost:8080/sem7/sub4",data);
  }
  getele2(){
    return this.http.get("http://localhost:8080/sem7/dbdata24");
  } 
  dwm(data:any){
    return this.http.post("http://localhost:8080/sem8/sub1",data);
  }
  getdwm(){
    return this.http.get("http://localhost:8080/sem8/dbdata25");
  }
  cis(data:any){
    return this.http.post("http://localhost:8080/sem8/sub2",data);
  }
  getcis(){
    return this.http.get("http://localhost:8080/sem8/dbdata26");
  }
  ele3(data:any){
    return this.http.post("http://localhost:8080/sem8/sub3",data);
  }
  getele3(){
    return this.http.get("http://localhost:8080/sem8/dbdata27");
  }
  ele4(data:any){
    return this.http.post("http://localhost:8080/sem8/sub4",data);
  }
  getele4(){
    return this.http.get("http://localhost:8080/sem8/dbdata28");
  }
 
}
