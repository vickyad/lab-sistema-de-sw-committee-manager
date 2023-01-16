export interface IButton {
  children: React.ReactNode
  handleClick: () => void
  type?: 'primary' | 'secondary' | 'save' | 'attention' | 'card' | 'transparent'
  color?: 'blue' | 'black'
}
