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

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    ExpertSignUpComponent,
    HeaderComponent,
    FooterComponent,
    ExpertHomeComponent,
    UserAddToCartComponent
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
})
export class AppModule { }
