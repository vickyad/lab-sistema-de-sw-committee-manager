import { ITableHeader } from '../components/Table/Header/type'

export const MemberDetailsHeader: ITableHeader = {
  headers: [
    { label: 'órgão', editable: false, type: '' },
    { label: 'cargo', editable: true, type: 'text' },
    { label: 'período', editable: true, type: 'text' },
    { label: 'observação', editable: true, type: 'text' },
  ],
  sizes: [5, 3, 3, 4],
  type: 'secondary',
}
