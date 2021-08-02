import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-contatos',
  templateUrl: './form-contatos.component.html',
  styleUrls: ['./form-contatos.component.css']
})
export class FormContatosComponent implements OnInit {

  isEdit: boolean = false;
  isErroExist: boolean = false;
  erroText: string =  ""
  faExclamationTriangle = faExclamationTriangle;
  contato: any = [];

  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {
    
      this.contatosService.emitirEditar.subscribe(
        contato => {
          this.contato = contato;
          
          this.isEdit = true;
        } 
      )
  }

  onSubmit(formulario:any) {
    
    this.isErroExist = this.retornaErro(formulario.controls);
    
    console.log(this.isErroExist);
    console.log(formulario.controls);
    
  
    if(this.isErroExist == false){

      this.contatosService.setContatos(formulario.value);

      formulario.form.reset();

    }
    
    
  }
  
  editContato(formulario:any){

    let id =  this.contato.id;
    
    this.contato = formulario.value;

    this.contatosService.setEditContato(id, this.contato);

    formulario.form.reset();

    this.contato = [];

    this.isEdit = false;
  }

  retornaErro(controle: any){

    //Verifica se pelo menos um campo está preenchido
    if(controle.email.value === undefined && controle.cpf.value === undefined && controle.telefone.value === undefined && controle.nome.value === undefined && controle.sobrenome.value === undefined){
      this.erroText = "Preencha pelo menos um campo";
      return true;
    
    }else if(controle.email.value === null && controle.cpf.value === null && controle.telefone.value === null && controle.nome.value === null && controle.sobrenome.value === null){
      this.erroText = "Preencha pelo menos um campo";
      return true;

    }else{
      //Verifica se o email é válido
      if(controle.email.errors != null && controle.email.errors.email == true){
        this.erroText = "Email inválido";
        return true;
        //Verifica se cpf contem erros
      }else if(controle.cpf.errors != null) {
        this.erroText = "CPF inválido";
        return true;
      }else {
        this.erroText = "";
        return false;
      }
    }
  }

  cpfMask(event: KeyboardEvent) {
    let cpf = (<HTMLInputElement>event.target).value;

    if(cpf.length == 3)(<HTMLInputElement>event.target).value += `.`;
    if(cpf.length == 7)(<HTMLInputElement>event.target).value += `.`;
    if(cpf.length == 11)(<HTMLInputElement>event.target).value += `-`;
  }

}
