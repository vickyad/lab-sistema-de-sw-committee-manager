import { ITableHeader } from './Header/type'
import { TableTypesExtended } from './../../types/tableTypes'
export interface ITable {
  type: TableTypesExtended
  tableInfo: ITableHeader
  editMode?: boolean
  content: any
  showOptions?: boolean
  onUpdateTable?: (content: any) => void
}
