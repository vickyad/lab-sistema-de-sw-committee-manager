export interface IPopup {
  title: string
  children: React.ReactNode
  action: string
  actionType: 'save' | 'important'
  handleActionClick: () => void
  handleCancelClick: () => void
}
