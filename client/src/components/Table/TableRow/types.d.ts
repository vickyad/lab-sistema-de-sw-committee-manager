export interface ITableRow {
  id: number
  editMode?: boolean
  data: { id: number; content: any[] }
  sizes: number[]
  onChange: (updatedInfo: any, index: number, id: number) => void
}
