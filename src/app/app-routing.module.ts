import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = 
[{path: '' ,component: MainComponent},
{path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
