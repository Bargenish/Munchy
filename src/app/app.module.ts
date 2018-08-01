import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './@core/app-navbar/app-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from '@progress/kendo-angular-menu';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
