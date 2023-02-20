import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignUpComponent } from './Pages/user-sign-up/user-sign-up.component';
import { FooterComponent } from './Components/global/footer/footer.component';
import { UserHomeComponent } from "./Pages/user-home/user-home.component";
import { UserLoginComponent } from './Pages/user-login/user-login.component';
import { TourCardComponent } from './Components/global/tour-card/tour-card.component';
import { NavbarComponent } from './Components/global/navbar/navbar.component';
import { HeaderComponent } from './Container/home-page/header/header.component';
import { DestinationComponent } from './Container/home-page/destination/destination.component';
import { ImpactComponent } from './Container/home-page/impact/impact.component';
import { PopularDestComponent } from './Container/home-page/popular-dest/popular-dest.component';
import { DestinationCardComponent } from './Components/destination-card/destination-card.component';
import { UserAddToCartComponent } from './Pages/user-add-to-cart/user-add-to-cart.component';
import { AddToCartCardComponent } from './Components/add-to-cart-card/add-to-cart-card.component';
import { UserGovernorateComponent } from './Pages/user-governorate/user-governorate.component';
import { HeaderGovComponent } from './Container/user-governorate/header/headerGov.component';
import { UserPaymentComponent } from './Pages/user-payment/user-payment.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { VisionComponent } from './Container/aboutUs-page/vision/vision.component';
import { OurStoryComponent } from './Container/aboutUs-page/our-story/our-story.component';
import { StatisticsComponent } from './Container/aboutUs-page/statistics/statistics.component';
import { WhyBookComponent } from './Container/aboutUs-page/why-book/why-book.component';

@NgModule({
    declarations: [
        AppComponent,
        UserSignUpComponent,
        NavbarComponent,
        FooterComponent,
        UserHomeComponent,
        UserLoginComponent,
        TourCardComponent,
        HeaderComponent,
        DestinationComponent,
        ImpactComponent,
        PopularDestComponent,
        DestinationCardComponent,
        UserAddToCartComponent,
        AddToCartCardComponent,
        UserGovernorateComponent,
        HeaderGovComponent,
        UserPaymentComponent,
        AboutUsComponent,
        VisionComponent,
        OurStoryComponent,
        StatisticsComponent,
        WhyBookComponent
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
