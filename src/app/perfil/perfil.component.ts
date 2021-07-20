import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user:any;
  edit: boolean = false;

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.user = this.perfilService.getUser();
    localStorage.setItem('perfil', JSON.stringify(this.user));
  }

  editar() {
    this.edit = !this.edit;
  }

  salvar() {
    this.edit = !this.edit;
    if(this.edit === false) {
      localStorage.setItem('perfil', JSON.stringify(this.user));
    }
  }


}
