import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListProfesseursComponent } from './modules/admin/components/professeurs/list-professeurs/list-professeurs.component';
import { AddProfesseursComponent } from './modules/admin/components/professeurs/add-professeurs/add-professeurs.component';
import { FormsModule } from '@angular/forms';
import { AddMatiereComponent } from './modules/admin/components/matiere/add-matiere/add-matiere.component';
import { ListMatiereComponent } from './modules/admin/components/matiere/list-matiere/list-matiere.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListProfesseursComponent,
    AddProfesseursComponent,
    AddMatiereComponent,
    ListMatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }