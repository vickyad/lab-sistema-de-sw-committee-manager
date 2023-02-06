import { useState } from 'react'
import Icon from '../../../Icon'
import {
  OptionsContainer,
  Label,
  LabelContainer,
  TransparentButton,
  Container,
} from './styles'
import { IDropdown } from './types'

const Dropdown = ({
  size,
  options,
  optionSelected,
  setOptionSelected,
}: IDropdown) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleItemSelected = (name: string) => {
    setOptionSelected(name)
    setShowOptions(false)
  }
  return (
    <Container size={size}>
      <LabelContainer onClick={() => setShowOptions(!showOptions)}>
        <Label>{optionSelected}</Label>
        <Icon type="chevron" position={showOptions ? 'top' : 'down'} />
      </LabelContainer>
      {showOptions && (
        <OptionsContainer>
          {options.map((item, index) => (
            <TransparentButton
              key={`dropdown-item-${index}`}
              onClick={() => handleItemSelected(item.name)}
            >
              {item.name}
            </TransparentButton>
          ))}
        </OptionsContainer>
      )}
    </Container>
  )
}
export default Dropdown
