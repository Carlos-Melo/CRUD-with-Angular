import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mudarAcess:boolean = true;
  msgErro:string = ''

  constructor(
    private router: Router,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.router.navigate(['login'])
  }
  

  mudarAcessArea() {
    this.mudarAcess = !this.mudarAcess
  }

}
