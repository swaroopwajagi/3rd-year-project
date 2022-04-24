import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private authService:AuthService
    ) {
    this.signupForm =  this.fb.group({
      displayName :[""],
      email: [""],
      password:[""]
    });
   }

  ngOnInit(): void {
  }
  signdata(values:any){
    const data = {
      displayName : values.userdisplayName,
      email: values.useremail,
      password: values.userpassword,
    }
    this.authService.signup(data)
        .subscribe((res) => {
          alert('account created successfully'); 
          console.log(res);
        })
    
   
  }

}