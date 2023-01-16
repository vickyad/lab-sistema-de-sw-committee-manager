export interface IOptionsBox {
  type: 'comittee' | 'members'
  handleEdit: () => void
  handleDisable: () => void
  handleSeeHistory?: () => void
}
