import { ITableHeader } from './../TableHeader/type.d'
export interface IDetailsTable {
  tableInfo: ITableHeader
  editMode: boolean
  content: any
  updateTable?: (content: any) => void
}
