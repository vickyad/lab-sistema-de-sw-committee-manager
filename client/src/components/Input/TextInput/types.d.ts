export interface IInput {
  type?: string
  label: string
  value: string
  required?: boolean
  size?: 'default' | 'lg'
  handleChange: (newValue: string) => void
}
