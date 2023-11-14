import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TestComponent } from './components/test/test.component';
import { AddApprenantComponent } from './components/apprenants/add-apprenant/add-apprenant.component';
import { ListApprenantComponent } from './components/apprenants/list-apprenant/list-apprenant.component';


@NgModule({
  declarations: [
    AdministrateurComponent,
    SidebarComponent,
    TestComponent,
    AddApprenantComponent,
    ListApprenantComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
