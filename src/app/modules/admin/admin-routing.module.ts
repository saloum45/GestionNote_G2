import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { AddApprenantComponent } from './components/apprenants/add-apprenant/add-apprenant.component';
import { ListApprenantComponent } from './components/apprenants/list-apprenant/list-apprenant.component';
import { DetailsApprenantComponent } from './components/apprenants/details-apprenant/details-apprenant.component';
import { LoginComponent } from 'src/app/login/login.component';
import { EditApprenantComponent } from './components/apprenants/edit-apprenant/edit-apprenant.component';

const routes: Routes = [
  {
    path:'',component:AdministrateurComponent,children:[
      {
        path:'addApprenant',component:AddApprenantComponent
      },
      {
        path:'listApprenant',component:ListApprenantComponent
      },
      {
        path:'details',component:DetailsApprenantComponent
      },
      {
        path:'modifier/:id',component:EditApprenantComponent
      }

    ]
  },
  {
    path:'login',component:LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
