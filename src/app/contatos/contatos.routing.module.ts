import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContatosComponent } from "./contatos.component";
import { FormContatosComponent } from "./form-contatos/form-contatos.component";

const contatosRoutes: Routes = [
    { path: 'contatos', component: ContatosComponent, children:[
        { path: ':id', component: FormContatosComponent},
        { path: 'novo', component: FormContatosComponent},
    ]},
];
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(contatosRoutes)
    ],
    exports: [RouterModule]
})

export class ContatosRoutingModule {}
