export interface IHeader {
  headerTitle: string
  buttonType: 'export' | 'save'
  handleExportOrSave: () => void
  handleCancel?: () => void
  backButtonMsg: string
}
