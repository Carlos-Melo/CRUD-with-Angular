import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostratMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario:any) {
    
    if(usuario.value.email === 'usuario@email.com' && usuario.value.senha === '1') {
      
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
 