import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { ContatosComponent } from './contatos.component';
import { ContatosService } from './contatos.service';
import { FormsModule } from '@angular/forms';
import { ContatosRoutingModule } from './contatos.routing.module';

@NgModule({
  declarations: [
    FormContatosComponent,
    ContatosComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ContatosRoutingModule
  ],
  exports: [],
  providers: [ContatosService]
})
export class ContatosModule { }
