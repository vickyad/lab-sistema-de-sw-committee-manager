export interface ITableHeader {
  headers: { label: string; editable: boolean; type: string }[]
  sizes: number[]
  type: 'primary' | 'secondary'
}
