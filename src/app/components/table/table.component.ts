import {Component, EventEmitter} from '@angular/core';
import {TableData} from '../../interfaces/';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  inputs: ['tableData:tableData'],
  outputs: ['actionItemClickEE']
})
export class TableComponent {
  private tableData:TableData;
  private actionItemClickEE: EventEmitter<any> = new EventEmitter();

  actionItemClick(actionType,rowItemId,itemTitle) {
    this.actionItemClickEE.next({
      action: actionType,
      id: rowItemId,
      title: itemTitle
    });
  }
}
