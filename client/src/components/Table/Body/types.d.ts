import { TableTypesExtended } from '../../../types/tableTypes'
import { ITableHeader } from '../Header/type'

export interface IBody {
  type: TableTypesExtended
  content: any
  showOptions: boolean
  tableInfo: ITableHeader
  editMode: boolean
  onUpdateTable?: (content: any) => void
}
