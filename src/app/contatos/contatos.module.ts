import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContatosComponent } from './contatos.component';
import { FormContatosModule } from './form-contatos/form-contatos.module';

@NgModule({
  declarations: [
    ContatosComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormContatosModule
  ],
  exports: [],
  providers: []
})
export class ContatosModule { }
