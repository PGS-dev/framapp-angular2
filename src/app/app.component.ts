import { Component, OnInit } from '@angular/core';

import { HeadbarComponent } from './components/headbar/headbar.component';
import { HomeComponent } from './components/home/home.component';

// import { ROUTER_DIRECTIVES } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ HeadbarComponent ,
               HomeComponent,
  ]
})
export class AppComponent implements OnInit{
  constructor() {

  }
  ngOnInit(){
  }
}
