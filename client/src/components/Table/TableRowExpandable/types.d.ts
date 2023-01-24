export interface ITableRow {
  type: 'comittee' | 'members'
  data: { id: number; content: any[] }
  sizes: number[]
  detailsToShow: number
  showOptions: boolean
  handleRowClick: (id: number) => void
}
