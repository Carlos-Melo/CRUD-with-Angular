import { Component, OnInit } from '@angular/core';

import { faPlusCircle, faWindowClose, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Contato } from './contato';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faWindowClose = faWindowClose;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  open: boolean = false;

  id: any;
  contatos: Contato[] = [];

  constructor(
    private contatosService: ContatosService
    ) { }

  ngOnInit(): void {

    this.contatos = this.contatosService.getContatos();

  }

  isWindowOpen() {
    this.open = !this.open;
  }

  editar(id:any) {

  }
  excluir() {

  }

}
