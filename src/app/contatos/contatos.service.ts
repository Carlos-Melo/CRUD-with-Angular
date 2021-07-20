import { Injectable} from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private contatos: Contato[] = [
    {id: 0, nome:'Carlos', sobrenome:'Eduardo', email:'carloszdu@gmail.com', cpf:'000.000.000-00', telefone:'(81) 98698-7034'},
    {id: 1, nome:'Eduardo', sobrenome:'Pereira', email:'eduardo@gmail.com', cpf:'111.111.111-11', telefone:'(81) 98698-7034'}
  ]

  id: any;

  constructor() {}
 
  getContatos(){
    return this.contatos;
  }
  
  setContatos(_nome:string, _sobrenome:string, _email:string, _cpf:string, _telefone:string){

    this.contatos.push({
      id: 1,
      nome: _nome,
      sobrenome: _sobrenome,
      email: _email,
      cpf: _cpf,
      telefone: _telefone
    })
  }
}
