import { Component, OnInit } from '@angular/core';
import {Category} from "../../services/categories.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
  inputs: ['list:list','header:header','icoClasses:icoClasses']
})
export class ListComponent implements OnInit {
  private list : Category = {};
  private header : string = '';
  private icoClasses : string = '';

  constructor() { }

  ngOnInit() {
  }
}
