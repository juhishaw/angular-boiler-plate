import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FiveHundreadComponent } from './error-pages/five-hundread/five-hundread.component';
import { FourOFourComponent } from './error-pages/four-o-four/four-o-four.component';


@NgModule({
  declarations: [
    AppComponent,
    FiveHundreadComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
