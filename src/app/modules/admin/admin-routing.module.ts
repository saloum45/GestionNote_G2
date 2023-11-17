import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { AddApprenantComponent } from './components/apprenants/add-apprenant/add-apprenant.component';
import { ListApprenantComponent } from './components/apprenants/list-apprenant/list-apprenant.component';
import { DetailsApprenantComponent } from './components/apprenants/details-apprenant/details-apprenant.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AddProfesseursComponent } from './components/professeurs/add-professeurs/add-professeurs.component';
import { ListProfesseursComponent } from './components/professeurs/list-professeurs/list-professeurs.component';
import { AddMatiereComponent } from './components/matiere/add-matiere/add-matiere.component';

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
        path:'addProfesseur',component:AddProfesseursComponent
      },
      {
        path:'listProfesseur',component:ListProfesseursComponent
      },
      {
        path:'addMatiere',component:AddMatiereComponent
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
