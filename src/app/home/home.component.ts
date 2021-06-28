import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mudarAcess:boolean = false;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  } 

  mudarAcessArea() {
    this.mudarAcess = !this.mudarAcess
  }

}
