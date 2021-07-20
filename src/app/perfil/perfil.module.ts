import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './perfil.component';
import { PerfilService } from './perfil.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    PerfilService
  ]
})
export class PerfilModule { }
