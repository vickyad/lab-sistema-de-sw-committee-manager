import { ITableHeader } from './TableHeader/type'
export interface ITable {
  type: 'comittee' | 'members' | 'details'
  editMode?: boolean
  content: any
  headerInfo: ITableHeader
  updateTable?: (content: any) => void
}
