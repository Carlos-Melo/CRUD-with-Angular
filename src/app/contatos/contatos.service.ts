import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  //Emissão de evento quando o botão editar é clicado
  emitirEditar = new EventEmitter<any>();

  private readonly API = `${environment.API}contatos`;

  constructor(private http: HttpClient) {}
 
  getContatos(){
    return this.http.get<Contato[]>(this.API);
  }
  
  setContatos(contato: Contato){
    return this.http.post(this.API, contato).pipe(take(1));
  }

  eventEditContato(id:any){
    this.emitirEditar.emit(id);
    
  }

  getEditContato(id: number){
    return this.http.get( `${this.API}/${id}`).pipe(take(1))
  }

  setEditContato(contato: any, id: number){
    return this.http.put( `${this.API}/${id}`, contato).pipe(take(1))
  }

  excluirContato(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  } 

}


