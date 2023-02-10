import { ITableHeader } from './../TableHeader/type.d'
import { TableTypesExtended } from '../../../types/tableTypes'
export interface IDetailsTable {
  tableInfo: ITableHeader
  editMode: boolean
  content: any
  type: TableTypesExtended
  updateTable?: (content: any) => void
}
