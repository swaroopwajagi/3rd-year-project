import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { CLanguageComponent } from './pages/c-language/c-language.component';
import { CaoComponent } from './pages/cao/cao.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { CartComponent } from './pages/cart/cart.component';
import { DeamComponent } from './pages/deam/deam.component';
import { EthicsComponent } from './pages/ethics/ethics.component';
import { DmgtComponent } from './pages/dmgt/dmgt.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {path:"trial1", component:LoginComponent},
  {path:"trial2", component:SignupComponent},
  {path:'main', component:FirstPageComponent},
  {path:'maths', component:MathematicsComponent,},
  {path:'language', component:CLanguageComponent},
  {path:'cao', component:CaoComponent},
  {path:'pay', component:PaymentpageComponent},
  {path:'cart', component:CartComponent},
  {path:'deam',component:DeamComponent},
  {path:'ethics', component:EthicsComponent},
  {path:'dmgt', component:DmgtComponent},
  {path:'',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
