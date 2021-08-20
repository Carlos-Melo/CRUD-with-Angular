import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { ContatosModule } from './contatos/contatos.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Erro404Component } from './erro404/erro404.component';

@NgModule({
  declarations: [
    AppComponent,
    Erro404Component,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContatosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
