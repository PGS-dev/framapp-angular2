import {Component, OnInit, EventEmitter} from '@angular/core';
import {Category} from "../../services/categories.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
  inputs: ['list:list','header:header','icoClasses:icoClasses','isItemRoute:isItemRoute'],
  outputs: ['listItemClickEE']
})
export class ListComponent implements OnInit {
  private list: Category = {};
  private header: string = '';
  private icoClasses: string = '';
  private isItemRoute: boolean = false;
  private listItemClickEE: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  listItemClick(itemId){
    if(this.isItemRoute===true){
      this.listItemClickEE.next(itemId);
    }
  }
}
