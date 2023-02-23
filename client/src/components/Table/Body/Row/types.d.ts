import { TableTypesExtended } from './../../../../types/tableTypes'
import {
  committeeContentType,
  memberContentType,
} from '../../../../types/contentTypes'
import { ITableHeader } from '../../Header/type'
import { TableTypesExtended } from '../../../../types/tableTypes'

export interface ITableRowExpandable {
  id: number
  children: React.ReactNode
  tableInfo: ITableHeader
  tableType: TableTypesExtended
  editMode?: boolean
  data: { id: number; content: memberContentType | committeeContentType }
  detailsToShowId: number
  showOptions: boolean
  handleRowClick: (id: number) => void
  handleOptionBoxSelection: (
    selected: ActionType,
    data: {
      id: number
      content: [string, number] | [string, string, string, string, string]
    }
  ) => void
  onChange: (updatedInfo: any, index: number, id: number) => void
}
