import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignUpComponent } from './Components/user-sign-up/user-sign-up.component';
import { ExpertSignUpComponent } from './Components/expert-sign-up/expert-sign-up.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { ExpertHomeComponent } from './expert-home/expert-home.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { UserGovernorateComponent } from './user-governorate/user-governorate.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    ExpertSignUpComponent,
    HeaderComponent,
    FooterComponent,
    ExpertHomeComponent,
    UserAddToCartComponent,
    UserGovernorateComponent,
    UserPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

import { UserHomeComponent } from "./Components/user-home/user-home.component";
import { UserLoginComponent } from './Components/user-login/user-login.component';

@NgModule({
    declarations: [
        AppComponent,
        UserSignUpComponent,
        ExpertSignUpComponent,
        HeaderComponent,
        FooterComponent,
        UserHomeComponent,
        UserLoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

    ]

})
export class AppModule { }
