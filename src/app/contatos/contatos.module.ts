import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListContatosComponent } from './list-contatos/list-contatos.component';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { ContatosComponent } from './contatos.component';
import { ContatosService } from './contatos.service';

@NgModule({
  declarations: [
    ListContatosComponent,
    FormContatosComponent,
    ContatosComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ContatosComponent
  ],
  providers: [
    ContatosService
  ]
})
export class ContatosModule { }
