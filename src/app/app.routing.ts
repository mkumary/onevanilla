import {Routes, RouterModule} from '@angular/router';

import { WhereToBuyComponent } from './where-to-buy/where-to-buy.component';
import { UsingYourCardComponent } from './using-your-card/using-your-card.component';
import { TryMyVanillaComponent } from './try-my-vanilla/try-my-vanilla.component';
import { HomeComponent } from  './home/home.component';
import { FaqComponent } from './faq/faq.component';

const appRoutes: Routes = [
    {path:'', component: HomeComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'where-to-buy', component: WhereToBuyComponent},
    {path: 'using-your-card', component: UsingYourCardComponent},
    {path: 'try-my-vanilla', component: TryMyVanillaComponent},
    {path: 'faq', component: FaqComponent},

];
//export const routing = RouterModule.forRoot(appRoutes);
export const routing = RouterModule.forRoot(appRoutes);
