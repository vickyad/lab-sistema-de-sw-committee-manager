export interface ITableRow {
  type: 'comittee' | 'members'
  data: { id: number; content: any[] }
  sizes: number[]
  detailsToShow: number
  handleRowClick: (id: number) => void
}
