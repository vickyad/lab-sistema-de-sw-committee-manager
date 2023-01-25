import { TableTypesExtended } from './../../types/tableTypes'
export interface ITable {
  type: TableTypesExtended
  editMode?: boolean
  content: any
  showOptions?: boolean
  updateTable?: (content: any) => void
}
