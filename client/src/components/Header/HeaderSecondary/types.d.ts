export interface IHeader {
  headerTitle: string
  buttonType: 'export' | 'save'
  handleClick: () => void
}
