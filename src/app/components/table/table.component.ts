import {Component, EventEmitter} from '@angular/core';
import {tableData} from "../../interfaces/";

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  inputs: ["tableData:tableData"],
  outputs: ['actionItemClickEE']
})
export class TableComponent {
  private tableData:tableData;
  private actionItemClickEE: EventEmitter<any> = new EventEmitter();

  constructor() {}

  actionItemClick(actionType,rowItemId){
    this.actionItemClickEE.next({
      action: actionType,
      id: rowItemId
    });
  }
}
