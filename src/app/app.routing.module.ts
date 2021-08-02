import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ContatosComponent } from "./contatos/contatos.component";
import { HomeComponent } from "./home/home.component";
import { PerfilComponent } from "./perfil/perfil.component"
import { AuthGuard } from "./guards/auth.guard.service";

const appRoutes: Routes = [
    { path: 'contatos', component: ContatosComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
    { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
    { path: '', component: HomeComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
