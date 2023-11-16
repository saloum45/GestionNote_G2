import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailApprenantComponent } from './detail-apprenant/detail-apprenant.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprenantComponent,
    DetailApprenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
