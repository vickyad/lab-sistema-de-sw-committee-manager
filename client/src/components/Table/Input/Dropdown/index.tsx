import { useState } from 'react'
import Button from '../../../Button'
import Icon from '../../../Icon'
import { OptionsContainer, Label, LabelContainer, Container } from './styles'
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
            <Button
              key={`dropdown-item-${index}`}
              title={`opção ${item.name}`}
              type="transparent"
              handleClick={() => handleItemSelected(item.name)}
            >
              {item.name}
            </Button>
          ))}
        </OptionsContainer>
      )}
    </Container>
  )
}
export default Dropdown
