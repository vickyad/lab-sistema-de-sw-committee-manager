import { ITableHeader } from './TableHeader/type'
export interface ITable {
  type: 'comittee' | 'members' | 'details'
  content: any
  headerInfo: ITableHeader
}
