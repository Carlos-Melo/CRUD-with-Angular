import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { FormsModule } from '@angular/forms';
import { CadastroModule } from './cadastro/cadastro.module';
import { HomeService } from './home.service';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CadastroModule,
    LoginModule
  ],
  exports: [
    HomeComponent,
  ],
  providers: []
})

export class HomeModule { }
