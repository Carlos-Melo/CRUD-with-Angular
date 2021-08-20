import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { ListContatosComponent } from './list-contatos/list-contatos.component';



const contatoRoutes: Routes = [
  { path: '', component: ListContatosComponent },
  { path: 'criar', component: FormContatosComponent },
  { path: 'edit/:id', component: FormContatosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(contatoRoutes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
