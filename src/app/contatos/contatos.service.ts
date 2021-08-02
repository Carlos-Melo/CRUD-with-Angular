import { Injectable, EventEmitter } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  //Emissão de evento quando o botão editar é clicado
  emitirEditar = new EventEmitter<any>();

  private contatos: Contato[] = [
    {id: 0, nome:'Carlos', sobrenome:'Eduardo', email:'carloszdu@gmail.com', cpf:'000.000.000-00', telefone:'(81) 98698-7034'},
    {id: 1, nome:'Eduardo', sobrenome:'Pereira', email:'eduardo@gmail.com', cpf:'111.111.111-11', telefone:'(81) 98698-7034'}
  ];

  constructor() {}
 
  getContatos(){
    return this.contatos;
  }
  
  setContatos(contato: Contato){
    this.contatos.push({
      id: this.contatos.length,
      nome: contato.nome,
      sobrenome: contato.sobrenome,
      email: contato.email,
      cpf: contato.cpf,
      telefone: contato.telefone
    });
     
  }

  eventEditContato(id:any){
    this.emitirEditar.emit(this.contatos[id]);
  }

  setEditContato(id:any, contato:any){
    this.contatos[id] = contato;

    this.contatos[id].id = id;
  }

  excluirContato(id:any){

    for (let i = id; i < this.contatos.length; i++) {
      const element = this.contatos[i];
      element.id --
    }

    this.contatos.splice(id, 1);
  } 

}


