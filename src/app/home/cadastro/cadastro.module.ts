import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from './cadastro.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CadastroService
  ]
})
export class CadastroModule { }
