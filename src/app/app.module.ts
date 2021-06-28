import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { ContatosModule } from './contatos/contatos.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContatosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
