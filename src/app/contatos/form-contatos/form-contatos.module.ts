import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContatosComponent } from './form-contatos.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [FormContatosComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    FormContatosComponent
  ]
})
export class FormContatosModule { }
