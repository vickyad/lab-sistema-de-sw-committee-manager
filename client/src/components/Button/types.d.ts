export interface IButton {
  title: string
  children: React.ReactNode
  handleClick: () => void
  type?:
    | 'primary'
    | 'secondary'
    | 'save'
    | 'attention'
    | 'card'
    | 'transparent'
    | 'subsection'
  color?: string
  fontSize?: 'default' | 'large'
  noBorder?: boolean
  svgStroke?: boolean
}
