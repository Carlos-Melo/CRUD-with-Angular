import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const homeRoutes: Routes = [
    { path: '', component: HomeComponent, children:[
        { path: 'login', component: LoginComponent},
        { path: 'cadastro', component: CadastroComponent},
    ]},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule {}
