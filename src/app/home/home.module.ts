import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule { }
