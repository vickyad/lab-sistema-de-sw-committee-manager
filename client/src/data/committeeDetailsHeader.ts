import { ITableHeader } from '../components/Table/Header/type'

export const CommitteeDetailsHeader: ITableHeader = {
  headers: [
    { label: 'cargo', editable: false, type: '' },
    { label: 'membro corrente', editable: true, type: 'dropdown' },
    { label: 'data de início', editable: true, type: 'text' },
    { label: 'mandato', editable: true, type: 'text' },
    { label: 'observação', editable: true, type: 'text' },
  ],
  sizes: [3, 3, 2, 1, 5],
  type: 'secondary',
}
