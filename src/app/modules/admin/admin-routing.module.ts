import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { TestComponent } from 'src/app/test/test.component';
import { AddApprenantComponent } from './components/apprenants/add-apprenant/add-apprenant.component';
import { ListApprenantComponent } from './components/apprenants/list-apprenant/list-apprenant.component';

const routes: Routes = [
  {
    path:'',component:AdministrateurComponent,children:[
      {
        path:'test',component:TestComponent
      },
      {
        path:'addApprenant',component:AddApprenantComponent
      },
      {
        path:'listApprenant',component:ListApprenantComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
