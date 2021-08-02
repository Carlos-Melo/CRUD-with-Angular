import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: FormGroup

  constructor(private authService: AuthService, private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.usuario = this.formBuild.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    })
  }

  onSubmit() {
    if(this.usuario.valid )
      this.authService.fazerLogin(this.usuario)
    else
      alert(`Usuario: usuario@email.com \nSenha: 1`)
    
    if(!this.authService.usuarioEstaAutenticado())
      alert('Usuario não encontrado')
  }

  verificaErro(campo: string){
    return !this.usuario.get(campo)?.valid && this.usuario.get(campo)?.touched
  }

  aplicaCss(campo: string) {
    if(this.verificaErro(campo))
      return {'erro': true}
    else
      return {'certo': true}
  }
}
