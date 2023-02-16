import { TableTypesBase } from '../../../../types/tableTypes'
export interface ITableRowExpandable {
  children: React.ReactNode
  type: TableTypesBase
  data: { id: number; content: [string, number]|[string, string, string, string, string]  }
  sizes: number[]
  detailsToShowId: number
  showOptions: boolean
  handleRowClick: (id: number) => void
  handleOptionBoxSelection: (
    selected: ActionType,
    data: {
      id: number
      content: [string, number]|[string, string, string, string, string] 
    }
  ) => void
}
