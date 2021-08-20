import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { ListContatosComponent } from './list-contatos/list-contatos.component';
import { ContatosRoutingModule } from './contatos.routing.module';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListContatosComponent,
    FormContatosComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    ContatosRoutingModule,
    FormsModule
  ],
  exports: []
})
export class ContatosModule { }
