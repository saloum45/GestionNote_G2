import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './dashboards/administrateur/administrateur.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministrateurComponent,
    SidebarComponent,
    TestComponent,
    ProfesseursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [CommonModule],
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
