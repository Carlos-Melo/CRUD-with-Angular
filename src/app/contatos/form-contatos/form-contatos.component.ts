import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { faExclamationTriangle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-contatos',
  templateUrl: './form-contatos.component.html',
  styleUrls: ['./form-contatos.component.scss']
})
export class FormContatosComponent implements OnInit {

  isEdit: boolean = false; //Variável para trocar de botão Adicionar e salvar
  isErroExist: boolean = false; //Variável para caso de erro
  erroText: string;   //Variável para armazenar o texto do erro
  faExclamationTriangle = faExclamationTriangle;
  faArrowLeft = faArrowLeft;
  contatoId: number; // Variável para armazenar id da rota
  contato: any = [];

  constructor(
    private activatedRoute: ActivatedRoute, //Usar parametros da rota
    private contatosService: ContatosService, //Injeção de dependência
    private route: Router
    ) {}

  ngOnInit(): void {
    // Extraindo parametro id da rota
    this.contatoId = this.activatedRoute.snapshot.params['id']

    if(this.contatoId != undefined) {

      this.isEdit = true

      const contato$ = this.contatosService.getEditContato(this.contatoId);
      contato$.subscribe( contato => this.contato = contato )

    }

  }

  onSubmit(formulario:any) {

    this.isErroExist = this.retornaErro(formulario.controls);

    if(this.isErroExist == false){

      this.contatosService.setContatos(formulario.value).subscribe({
        next: () => console.log('Sucesso'),
        error: err => console.log('Erro', err),
      });

      this.contatosService.getContatos()

      this.redirecionar()

    }
  }

  editContato(formulario:any){

    this.contatosService.setEditContato(formulario.value, this.contato.id).subscribe({
      next: () => console.log('Sucesso'),
      error: err => console.log('Erro', err),
    })


    this.redirecionar()

    this.isEdit = false;
  }

  redirecionar() {
    this.route.navigate([''])
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
