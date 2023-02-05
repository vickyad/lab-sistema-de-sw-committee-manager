import { Container, InputContainer, Label, Required } from './styles'
import { IInput } from './types'

const Input = ({ label, value, required = false, handleChange }: IInput) => {
  return (
    <Container>
      <Label>
        {label}
        {required && <Required>*</Required>}:
      </Label>
      <InputContainer
        type="text"
        value={value}
        onChange={(newValue) => handleChange(newValue.target.value)}
      />
    </Container>
  )
}
export default Input
