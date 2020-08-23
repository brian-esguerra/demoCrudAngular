import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Component/Persona/listar/listar.component';
import { AddComponent } from './Component/Persona/add/add.component';

const routes: Routes = [
  { path:'listPersons', component: ListarComponent},
  { path:'addPerson', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
