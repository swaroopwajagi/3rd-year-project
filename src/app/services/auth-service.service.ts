import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  nativeWindow() : any {
    return _window();
 }

  constructor(private http:HttpClient) { }
  // ng g service services/auth
  signup(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/auth/signup", data);
  }
  login(data:any):Observable<any> {
    return this.http.post("http://localhost:8080/auth/login", data);
  }
  payment(data:any){
    return this.http.post("http://localhost:8080/auth/customer",data);
  }

  getProfile():Observable<any> {
    const headers = {
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get("http://localhost:8080/auth/profile", {headers: headers});
  }
}