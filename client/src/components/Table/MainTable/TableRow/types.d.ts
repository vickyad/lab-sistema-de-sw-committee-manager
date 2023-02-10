import { TableTypesBase } from '../../../../types/tableTypes'
export interface ITableRowExpandable {
  children: React.ReactNode
  type: TableTypesBase
  data: { id: number; content: any[] }
  sizes: number[]
  detailsToShowId: number
  showOptions: boolean
  handleRowClick: (id: number) => void
  handleOptionBoxSelection: (
    selected: ActionType,
    data: {
      id: number
      content: any[]
    }
  ) => void
}
