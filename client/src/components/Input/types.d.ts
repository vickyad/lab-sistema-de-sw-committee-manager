export interface IInput {
  label: string
  value: string
  required?: boolean
  handleChange: (newValue: string) => void
}
