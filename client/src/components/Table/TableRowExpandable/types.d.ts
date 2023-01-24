export interface ITableRow {
  type: 'comittee' | 'members'
  data: { id: number; content: any[] }
  sizes: number[]
  detailsToShow: number
  handleRowClick: (id: number) => void
  handleSeeHistory: (id: number) => void,
  handleEdit: (id: number) => void,
  handleDisable: (id: number) => void
}
