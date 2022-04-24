import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  returnurl:any="http://rnaura.com/blog-post/redirect-to-previous-url-after-login-with-auth-guard-2/"
  loginForm:FormGroup
  alertMessage:string = '';
  alertClass:string  = 'd-none'
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb:FormBuilder,
    private authService:AuthService
    ) {
    this.loginForm=  this.fb.group({
      email: ["", Validators.required],
      password:["", Validators.required]
    });
   }

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
    const data = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    
    this.authService.login(data)
        .subscribe(
          res => {    
             if(res.success) {
               this.alertClass = 'alert alert-success';
               this.router.navigate(['main']);
               this.alertMessage = 'Login Successfully';
               localStorage.setItem('token', res.token);
             
             }else {
              this.alertClass = 'alert alert-danger';
              this.alertMessage = res.message
             }
            
          }, 
          err => {
            alert("Server error")
          }
        )
   
  }else {
    this.alertClass = 'alert alert-danger'
    this.alertMessage = 'Invalid Form'
  }
  setTimeout(() => {
    this.alertClass = 'd-none';
    this.alertMessage = '';
   },3000)
}
 

}