import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { WhereToBuyComponent } from './where-to-buy/where-to-buy.component';
import { UsingYourCardComponent } from './using-your-card/using-your-card.component';
import { TryMyVanillaComponent } from './try-my-vanilla/try-my-vanilla.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    WhereToBuyComponent,
    UsingYourCardComponent,
    TryMyVanillaComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
