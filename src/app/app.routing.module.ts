import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { Erro404Component } from "./erro404/erro404.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'contatos', pathMatch: 'full'},
    { path: 'contatos', loadChildren: () => import('./contatos/contatos.module').then(m => m.ContatosModule)},
    { path: '**', component: Erro404Component }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
