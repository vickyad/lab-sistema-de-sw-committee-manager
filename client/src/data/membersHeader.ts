import { ITableHeader } from '../components/Table/Header/type'

export const MemberTableHeader: ITableHeader = {
  headers: [
    { label: 'funcionário', editable: false, type: '' },
    { label: 'participações', editable: false, type: '' },
  ],
  sizes: [5, 2],
  type: 'primary',
}
