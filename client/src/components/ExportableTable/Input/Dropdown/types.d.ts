export interface IDropdown {
  size: number
  options: { id: number; name: string }[]
  optionSelected: string
  setOptionSelected: (name: string) => void
}
