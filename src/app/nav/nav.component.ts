import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../home/login/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mostrarMenu: boolean = false

  constructor(
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.authService.mostratMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

}
