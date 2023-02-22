import { ITableHeader } from './TableHeader/type.d'
import { TableTypesExtended } from './../../types/tableTypes'
export interface ITable {
  type: TableTypesExtended
  header: ITableHeader
  editMode?: boolean
  content: any
  showOptions?: boolean
  updateTable?: (content: any) => void
}
