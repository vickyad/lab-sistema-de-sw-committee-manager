import { ITableHeader } from '../components/Table/Header/type'

export const CommitteeTableHeader: ITableHeader = {
  headers: [
    { label: 'órgão', editable: false, type: '' },
    { label: 'vínculo', editable: false, type: '' },
    { label: 'portaria', editable: false, type: '' },
    { label: 'período', editable: false, type: '' },
    { label: 'mandato', editable: false, type: '' },
  ],
  sizes: [5, 1, 2, 3, 1],
  type: 'primary',
}
