import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdministrateurComponent } from './dashboards/administrateur/administrateur.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'sidebar',component:SidebarComponent
  },
  {
    path:'dashboard',component:AdministrateurComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'test',component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
