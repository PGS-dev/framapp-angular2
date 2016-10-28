import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableData} from '../../../interfaces/';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent {
  @Input('tableData') tableData: TableData;
  @Output('actionItemClickEE') actionItemClickEE: EventEmitter<any> = new EventEmitter();
  // @ViewChild('removeModal') removeModal;

  removeCategory(categoryId, categoryName) {
    // this.deleteCategoryName = categoryName;
    // this.deleteCategoryId = categoryId;
    // this.removeModal.open();
  }
  actionItemClick(actionType, rowItemId, itemTitle) {
    // console.log(this.tableData);
    // console.log(actionType, rowItemId, itemTitle)
    this.actionItemClickEE.next({
      action: actionType,
      id: rowItemId,
      title: itemTitle
    });
  }
}
