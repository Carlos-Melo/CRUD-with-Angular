import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-form-contatos',
  templateUrl: './form-contatos.component.html',
  styleUrls: ['./form-contatos.component.css']
})
export class FormContatosComponent implements OnInit {

  contato: any = {};

  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {

  }

 addContato(nome:string, sobrenome:string, email:string, cpf:string, telefone:string) {
    this.contatosService.setContatos(nome, sobrenome, email, cpf, telefone)
  }
}
