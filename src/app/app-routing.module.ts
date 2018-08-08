import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MapComponent } from './pages/map/map.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SellersComponent } from './pages/sellers/sellers.component';

const routes: Routes = 
[{path: '' ,component: MainComponent},
{path: 'map', component: MapComponent},
{path: 'statistics', component: StatisticsComponent},
{path: "restaurants", component: SellersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
