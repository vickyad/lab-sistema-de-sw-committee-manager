import { TableTypesExtended } from '../../../../types/tableTypes'

export interface ITableRow {
  id: number
  editMode?: boolean
  data: { id: number; content: any[] }
  tableInfo: ITableHeader
  type: TableTypesExtended
  onChange: (updatedInfo: any, index: number, id: number) => void
}
