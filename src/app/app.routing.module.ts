import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ContatosComponent } from "./contatos/contatos.component";
import { HomeComponent } from "./home/home.component";
import { PerfilComponent } from "./perfil/perfil.component"

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contatos', component: ContatosComponent},
    { path: 'perfil', component: PerfilComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
