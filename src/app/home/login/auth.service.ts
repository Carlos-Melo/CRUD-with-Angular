import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostratMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.email === '1' && usuario.senha === '1') {
      
      this.usuarioAutenticado = true;

      this.mostratMenuEmitter.emit(true);

      this.router.navigate(['/contatos'])

    }else {
      this.usuarioAutenticado = false;

      this.mostratMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
 