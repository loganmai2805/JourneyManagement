import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  search:string = "Search";

  constructor() { }

  clickSearch(){
    this.search = "What are you looking for?"
  }
}
