export interface ITableRow {
  id: number
  editMode?: boolean
  data: { id: number; content: any[] }
  tableInfo: ITableHeader
  onChange: (updatedInfo: any, index: number, id: number) => void
}
