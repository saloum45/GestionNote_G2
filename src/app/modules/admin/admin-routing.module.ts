import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { AddApprenantComponent } from './components/apprenants/add-apprenant/add-apprenant.component';
import { ListApprenantComponent } from './components/apprenants/list-apprenant/list-apprenant.component';
import { DetailsApprenantComponent } from './components/apprenants/details-apprenant/details-apprenant.component';
import { LoginComponent } from 'src/app/login/login.component';
import { EditApprenantComponent } from './components/apprenants/edit-apprenant/edit-apprenant.component';
import { AddClasseComponent } from './components/classes/add-classe/add-classe.component';
import { ListClasseComponent } from './components/classes/list-classe/list-classe.component';
import { DetailsClasseComponent } from './components/classes/details-classe/details-classe.component';
import { EditClasseComponent } from './components/classes/edit-classe/edit-classe.component';
import { StattistiqueComponent } from './components/stattistique/stattistique.component';
import { AddProfesseursComponent } from './components/professeurs/add-professeurs/add-professeurs.component';
import { ListProfesseursComponent } from './components/professeurs/list-professeurs/list-professeurs.component';
import { AddMatiereComponent } from './components/matiere/add-matiere/add-matiere.component';
import { loginGuard } from 'src/app/guards/login.guard';
import { ListEvaluationComponent } from './components/evaluation/list-evaluation/list-evaluation.component';
import { AddEvaluationComponent } from './components/evaluation/add-evaluation/add-evaluation.component';
import { DetailEvaluationComponent } from './components/evaluation/detail-evaluation/detail-evaluation.component';
import { MesEvaluationsComponent } from './components/evaluation/mes-evaluations/mes-evaluations.component';

const routes: Routes = [
  {
    path:'',component:AdministrateurComponent,children:[
      {
        path:"",redirectTo:"statistique",pathMatch:'full'
      },
      {
        path:'addApprenant',component:AddApprenantComponent
      },
      {
        path:'listApprenant',component:ListApprenantComponent
      },
      {
        path:'detailsApprenant',component:DetailsApprenantComponent
      },
      {
        path:'modifierApprenant/:id',component:EditApprenantComponent
      },
      {
        path:'addClasse',component:AddClasseComponent
      },
      {
        path:'listClasse',component:ListClasseComponent
      },
      {
        path:'detailsClasse',component:DetailsClasseComponent
      },
      {
        path:'modifierClasse/:id',component:EditClasseComponent
      },
      {
        path:'statistique',component:StattistiqueComponent
      },
      {
        path:'addProfesseur',component:AddProfesseursComponent
      },
      {
        path:'listProfesseur',component:ListProfesseursComponent
      },
      {
        path:'addMatiere',component:AddMatiereComponent
      },
      {
        path:'listEvaluation',component:ListEvaluationComponent
      },
      {
        path:'addEvaluation',component:AddEvaluationComponent
      },
      {
        path:'detailEvaluation/:id',component:DetailEvaluationComponent
      },
      {
        path:'mesEvaluations',component:MesEvaluationsComponent
      }

    ]
  },
  {
    path:'login',component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
