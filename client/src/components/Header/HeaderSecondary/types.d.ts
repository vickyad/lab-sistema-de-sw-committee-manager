export interface IHeader {
  headerTitle: string
  backButtonMsg: string
  buttonType: 'export' | 'save'
  handleSave?: () => void
  handleCancel?: () => void
  handleExport?: (type: 'csv' | 'pdf') => void
}
