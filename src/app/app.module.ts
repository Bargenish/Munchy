import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './@core/app-navbar/app-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from '@progress/kendo-angular-menu';
import { HeaderComponent } from './@core/header/header.component';
import { FooterComponent } from './@core/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { AsideMenuComponent } from './@core/aside-menu/aside-menu.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './pages/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { StatisticsComponent } from './pages/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AsideMenuComponent,
    MapComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    DropDownsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIwXwMv1L8-KCq1aO6wCJ9FYxNpigsM_I'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
