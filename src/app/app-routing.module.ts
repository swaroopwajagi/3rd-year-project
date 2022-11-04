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
import { AmiComponent } from './pages/ami/ami.component';
import { TocComponent } from './pages/toc/toc.component';
import { DspdComponent } from './pages/dspd/dspd.component';
import { ImflComponent } from './pages/imfl/imfl.component';
import { DcomComponent } from './pages/dcom/dcom.component';
import { OomComponent } from './pages/oom/oom.component';
import { DbmsComponent } from './pages/dbms/dbms.component';
import { DaaComponent } from './pages/daa/daa.component';
import { OsComponent } from './pages/os/os.component';
import { CgComponent } from './pages/cg/cg.component';
import { EsdComponent } from './pages/esd/esd.component';
import { SepmComponent } from './pages/sepm/sepm.component';
import { FeComponent } from './pages/fe/fe.component';
import { CnComponent } from './pages/cn/cn.component';
import { CompilerComponent } from './pages/compiler/compiler.component';
import { AiComponent } from './pages/ai/ai.component';
import { Ele1Component } from './pages/ele1/ele1.component';
import { Ele2Component } from './pages/ele2/ele2.component';
import { DwmComponent } from './pages/dwm/dwm.component';
import { CisComponent } from './pages/cis/cis.component';
import { Ele3Component } from './pages/ele3/ele3.component';
import { Ele4Component } from './pages/ele4/ele4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
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
  {path:'',component:HomepageComponent},
  {path:'ami',component:AmiComponent},
  {path:"toc",component:TocComponent},
  {path:"dspd",component:DspdComponent},
  {path:"imfl", component:ImflComponent},
  {path:'dcom', component:DcomComponent},
  {path:'oom', component:OomComponent},
  {path:"dbms", component:DbmsComponent},
  {path:"daa", component:DaaComponent},
  {path:"os", component:OsComponent},
  {path:"cg", component:CgComponent},
  {path:"esd",component:EsdComponent},
  {path:"sepm",component:SepmComponent},
  {path:"fe", component:FeComponent},
  {path:"cn",component:CnComponent},
  {path:"compiler",component:CompilerComponent},
  {path:"ai",component:AiComponent},
  {path:"ele1",component:Ele1Component},
  {path:"ele2",component:Ele2Component},
  {path:"dwm",component:DwmComponent},
  {path:"cis",component:CisComponent},
  {path:"ele3",component:Ele3Component},
  {path:"ele4",component:Ele4Component},
  {path:"aboutus",component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
