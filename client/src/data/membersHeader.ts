import { ITableHeader } from '../components/Table/TableHeader/type'

export const MemberTableHeader: ITableHeader = {
  headers: [
    { label: 'funcionário', editable: false, type: 'text' },
    { label: 'participações', editable: false, type: 'text' },
  ],
  sizes: [5, 2],
  type: 'primary',
}
