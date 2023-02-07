export interface IHeader {
  headerTitle: string
  backButtonMsg: string
  buttonType: 'export' | 'save'
  handleExportOrSave?: () => void
  handleCancel?: () => void
}
