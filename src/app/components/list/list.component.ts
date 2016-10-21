import {Component} from '@angular/core';
import {Category} from "../../interfaces/";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
  inputs: ['list:list','header:header','icoClasses:icoClasses'],
  outputs: []
})
export class ListComponent{
  private list: Category = {};
  private header: string = '';
  private icoClasses: string = '';

  constructor() {}
}
