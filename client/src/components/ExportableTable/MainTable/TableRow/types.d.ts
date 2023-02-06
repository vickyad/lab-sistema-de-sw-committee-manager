import { TableTypesBase } from '../../../../types/tableTypes'
export interface ITableRowExpandable {
  children: React.ReactNode
  data: { id: number; content: any[] }
  sizes: number[]
}
