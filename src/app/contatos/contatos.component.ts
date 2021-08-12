import { Component, OnInit } from '@angular/core';

import { faPlusCircle, faWindowClose, faEdit, faTrashAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable, empty, Subject } from 'rxjs';
import { Contato } from './contato';
import { ContatosService } from './contatos.service';
import { catchError } from 'rxjs/operators'

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
  faExclamationCircle = faExclamationCircle;

  open: boolean = false;

  contatos$: Observable<Contato[]>;
  error$ = new Subject<boolean>();

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {

    this.getContatos();
    
  }

  getContatos(){
    this.contatos$ = this.contatosService.getContatos()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

  isWindowOpen() {
    this.open = !this.open;
  }

  editar(id:any) {
    this.contatosService.eventEditContato(id);
  }
  
  excluir(id:any) {
    this.contatosService.excluirContato(id).subscribe(
      error => console.log(error),
      success => this.getContatos()
      
    );
  }

}
