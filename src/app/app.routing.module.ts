import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ContatosComponent } from "./contatos/contatos.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contatos', component: ContatosComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
