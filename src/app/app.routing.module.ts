import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ContatosComponent } from "./contatos/contatos.component";
import { HomeComponent } from "./home/home.component";
import { PerfilComponent } from "./perfil/perfil.component"
import { AuthGuard } from "./guards/auth.guard.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contatos', component: ContatosComponent, canActivate: [AuthGuard]},
    { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
