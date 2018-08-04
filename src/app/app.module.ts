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

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AsideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    DropDownsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
