import { Component, OnInit } from '@angular/core';

import { faPlusCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  click: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  faPlusCircle = faPlusCircle;
  faWindowClose = faWindowClose;

  isClicked() {
    this.click = !this.click
  }

}
