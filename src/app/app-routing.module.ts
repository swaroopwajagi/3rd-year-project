import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { CLanguageComponent } from './pages/c-language/c-language.component';
import { CaoComponent } from './pages/cao/cao.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';

const routes: Routes = [
  {path:"trial1", component:LoginComponent},
  {path:"trial2", component:SignupComponent},
  {path:'', component:FirstPageComponent},
  {path:'maths', component:MathematicsComponent},
  {path:'language', component:CLanguageComponent},
  {path:'cao', component:CaoComponent},
  {path:'pay', component:PaymentpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
