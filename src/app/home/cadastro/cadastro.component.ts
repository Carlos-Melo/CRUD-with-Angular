import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
      data: [null, Validators.required],
      genero: [null, Validators.required]
    })
  }

  onSubmit() {

    if(this.formulario.valid){
      this.formulario.reset()
      console.log(this.formulario);
    }
     
  }

  verificaErro(campo: string){
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  aplicaCss(campo: string) {
    if(this.verificaErro(campo))
      return {'erro': true};
    else
      return {'certo': true}
  }

}
