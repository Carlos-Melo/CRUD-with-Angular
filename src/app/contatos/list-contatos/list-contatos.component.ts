import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-list-contatos',
  templateUrl: './list-contatos.component.html',
  styleUrls: ['./list-contatos.component.css']
})
export class ListContatosComponent implements OnInit {

  contatos:any[] = [];

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {

    this.contatos = this.contatosService.getContatos()

  }

}
