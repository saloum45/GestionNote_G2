import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseursComponent } from './professeurs/professeurs.component';

const routes: Routes = [
  {path: 'professeurs', component:ProfesseursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }