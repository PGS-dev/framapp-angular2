import { Component } from '@angular/core';
import {tableData} from "../../interfaces/";

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  inputs: ["tableData:tableData"]
})
export class TableComponent {
  private tableData:tableData;

  constructor() {}
}
