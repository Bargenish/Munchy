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
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MapComponent } from './pages/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import {NvD3Module} from "ng2-nvd3";
import { SellersComponent } from './pages/sellers/sellers.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CreateComponent } from './pages/sellers/crud_dialogs/create/create.component';
import { EditComponent } from './pages/sellers/crud_dialogs/edit/edit.component';
import { DeleteComponent } from './pages/sellers/crud_dialogs/delete/delete.component';
import { FormsModule } from '@angular/forms';


import { ShareModule } from '@ngx-share/core';

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
    SellersComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    DropDownsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIwXwMv1L8-KCq1aO6wCJ9FYxNpigsM_I'
    }),
    NvD3Module,
    GridModule,
    DialogModule,
    ButtonsModule,
    ShareModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
