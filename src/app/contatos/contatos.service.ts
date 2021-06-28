import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  contatos:any[] = [
    {nome:'Carlos', sobrenome:'Eduardo', email:'carloszdu@gmail.com', cpf:'000.000.000-00', telefone:'(81) 98698-7034'}
  ]

  constructor() { }

  getContatos(){
    return this.contatos
  }
}
