import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MapComponent } from './pages/map/map.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SellersComponent } from './pages/sellers/sellers.component';
import { LuckyComponent } from './pages/lucky/lucky.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = 
[{path: '' ,component: MainComponent},
{path: 'map', component: MapComponent},
{path: 'statistics', component: StatisticsComponent},
{path: "restaurants", component: SellersComponent},
{path: "order", component: OrderComponent},

{path: "lucky", component: LuckyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
