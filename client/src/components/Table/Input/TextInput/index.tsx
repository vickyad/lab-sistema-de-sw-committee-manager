import { Input } from './styles'
import { ITextInput } from './types'

const TextInput = ({ size, value, handleOnChange }: ITextInput) => {
  return (
    <Input
      size={size}
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  )
}
export default TextInput
