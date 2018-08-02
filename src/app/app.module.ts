import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhereToBuyComponent } from './where-to-buy/where-to-buy.component';
import { UsingYourCardComponent } from './using-your-card/using-your-card.component';
import { TryMyVanillaComponent } from './try-my-vanilla/try-my-vanilla.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { FaqAccordionsComponent } from './faq-accordions/faq-accordions.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhereToBuyComponent,
    UsingYourCardComponent,
    TryMyVanillaComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent,
    AccordionItemComponent,
    FaqAccordionsComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
