import { useState } from 'react'
import Button from '../../Button'
import Icon from '../../Icon'
import {
  BoxContainer,
  Container,
  Input,
  InputContainer,
  Label,
  Required,
} from './styles'
import { IDropdown } from './types'

const Dropdown = ({
  label,
  required = false,
  placeholder,
  options,
  optionSelected,
  setOptionSelected,
}: IDropdown) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleItemSelected = (item: { id: number; name: string }) => {
    setOptionSelected(item)
    setShowOptions(false)
  }

  return (
    <Container>
      {label && (
        <Label>
          {label}:{required && <Required>*</Required>}
        </Label>
      )}
      <InputContainer onClick={() => setShowOptions(!showOptions)}>
        <Input>
          {optionSelected.name.length > 0 ? optionSelected.name : placeholder}
        </Input>
        <Icon type="chevron" position={showOptions ? 'top' : 'down'} />
      </InputContainer>
      {showOptions && (
        <BoxContainer>
          {options.map((item, index) => (
            <Button
              key={`dropdown-item-${index}`}
              title={`opção ${item.name}`}
              type="transparent"
              color="black"
              handleClick={() => handleItemSelected(item)}
            >
              {item.name}
            </Button>
          ))}
        </BoxContainer>
      )}
    </Container>
  )
}
export default Dropdown
