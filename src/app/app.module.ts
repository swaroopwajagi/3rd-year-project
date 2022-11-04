import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { CaoComponent } from './pages/cao/cao.component';
import { CLanguageComponent } from './pages/c-language/c-language.component';
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
import { OsComponent } from './pages/os/os.component';
import { DaaComponent } from './pages/daa/daa.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FirstPageComponent,
    MathematicsComponent,
    CaoComponent,
    CLanguageComponent,
    PaymentpageComponent,
    CartComponent,
    DeamComponent,
    EthicsComponent,
    DmgtComponent,
    HomepageComponent,
    AmiComponent,
    TocComponent,
    DspdComponent,
    ImflComponent,
    DcomComponent,
    OomComponent,
    DbmsComponent,
    OsComponent,
    DaaComponent,
    CgComponent,
    EsdComponent,
    SepmComponent,
    FeComponent,
    CnComponent,
    CompilerComponent,
    AiComponent,
    Ele1Component,
    Ele2Component,
    DwmComponent,
    CisComponent,
    Ele3Component,
    Ele4Component,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
