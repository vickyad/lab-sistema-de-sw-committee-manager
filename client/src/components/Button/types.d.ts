export interface IButton {
  title: string
  children: React.ReactNode
  handleClick: () => void
  type?: 'primary' | 'secondary' | 'save' | 'attention' | 'card' | 'transparent'
  color?: 'blue' | 'black'
  fontSize?: 'default' | 'large'
}
