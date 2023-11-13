import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { TestComponent } from 'src/app/test/test.component';

const routes: Routes = [
  {
    path:'',component:AdministrateurComponent,children:[
      {
        path:'test',component:TestComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
