import { Component, OnInit } from '@angular/core';
import {NavService} from "../../services/nav.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {

  constructor(private _NavService:NavService) {
  }

  toggleMenu(){
    this._NavService.changeVisible();
  }
  ngOnInit() {
  }
}
