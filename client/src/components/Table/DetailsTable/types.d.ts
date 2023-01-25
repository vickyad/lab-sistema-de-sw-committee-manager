export interface IDetailsTable {
  sizes: number[]
  editMode: boolean
  content: any
  updateTable?: (content: any) => void
}
