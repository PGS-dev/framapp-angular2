export interface tableRow{
  rowId: string;
  rowId2?: string;
  rowColumns: Array<string>
}
export interface tableData{
  hasRmEditBtns: boolean;
  headers : Array<string>;
  dataRows : tableRow[];
}
