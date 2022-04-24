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
    HomepageComponent
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
