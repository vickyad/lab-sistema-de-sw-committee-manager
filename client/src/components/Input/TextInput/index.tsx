import { Container, InputContainer, Label, Required } from './styles'
import { IInput } from './types'

const TextInput = ({
  type = 'text',
  label,
  required = false,
  value,
  handleChange,
  size = 'default',
}: IInput) => {
  return (
    <Container>
      <Label size={size}>
        {label}:{required && <Required>*</Required>}
      </Label>
      <InputContainer
        type={type}
        value={value}
        onChange={(newValue) => handleChange(newValue.target.value)}
      />
    </Container>
  )
}
export default TextInput
