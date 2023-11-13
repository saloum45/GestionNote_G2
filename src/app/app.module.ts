import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProfesseursComponent } from './professeurs/professeurs.component';
=======
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './dashboards/administrateur/administrateur.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
>>>>>>> 3f842098d1b9949e64d0e2c669f1a59ffe7b2093

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProfesseursComponent
=======
    LoginComponent,
    AdministrateurComponent,
    SidebarComponent,
    TestComponent
>>>>>>> 3f842098d1b9949e64d0e2c669f1a59ffe7b2093
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
