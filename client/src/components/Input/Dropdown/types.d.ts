export interface IDropdown {
  label?: string
  required?: boolean
  placeholder: string
  options: { id: number; name: string }[]
  optionSelected: { id: number; name: string }
  setOptionSelected: (option: { id: number; name: string }) => void
}
