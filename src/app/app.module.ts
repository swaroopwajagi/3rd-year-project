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
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FirstPageComponent,
    MathematicsComponent,
    CaoComponent,
    CLanguageComponent,
    PaymentpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
