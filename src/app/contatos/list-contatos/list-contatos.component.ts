import { Component, OnInit } from '@angular/core';
import { faEdit, faExclamationCircle, faTimesCircle, faTrashAlt, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contato } from '../contato';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-list-contatos',
  templateUrl: './list-contatos.component.html',
  styleUrls: ['./list-contatos.component.scss']
})
export class ListContatosComponent implements OnInit {

  faUser = faUserAlt
  faTimesCircle = faTimesCircle;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faExclamationCircle = faExclamationCircle;

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

  excluir(id:any) {
    let conf = confirm ('Tem certeza que deseja excluir?')

    if(conf){
    this.contatosService.excluirContato(id).subscribe({
      next: () => {
        console.log('Deletado');
        this.getContatos();
      },
      error: err => console.log('Erro', err)
    });
  }
  }

}
