export interface IHeader {
  headerTitle: string
  buttonType: 'export' | 'save'
  handleExportOrSave: () => void
  backButtonMsg: string
}
