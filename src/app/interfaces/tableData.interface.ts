export interface tableRow{
  rowId: string;
  rowId2?: string;
  rowColumns: Array<string>
}
export interface tableData{
  actions: Array<string>;
  headers : Array<string>;
  dataRows : tableRow[];
}
