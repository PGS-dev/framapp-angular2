export interface TableRow {
  rowId: string;
  rowId2?: string;
  title?: string;
  rowColumns: Array<string>;
}
export interface TableData {
  actions: Array<string>;
  headers: Array<string>;
  dataRows: TableRow[];
}
