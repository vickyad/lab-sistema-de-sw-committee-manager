import { ITableHeader } from './TableHeader/type'
export interface ITable {
  type: 'comittee' | 'members' | 'details'
  content: any
  headerInfo: ITableHeader
  handleSeeHistory?: (id: number) => void
  handleEdit?: (id: number) => void
  handleDisable?: (id: number) => void
}
