import { TableTypesBase } from './../../types/tableTypes'
export interface IOptionsBox {
  type: TableTypesBase
  handleEdit: () => void
  handleDisable: () => void
  handleSeeHistory?: () => void
}
