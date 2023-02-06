import { useState } from 'react'
import Icon from '../../Icon'
import { Container, Label, LabelContainer, TransparentButton } from './styles'
import { IDropdown } from './types'

const Dropdown = ({
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
    <div style={{ position: 'relative' }}>
      <LabelContainer onClick={() => setShowOptions(!showOptions)}>
        <Label>
          {optionSelected.name.length > 0 ? optionSelected.name : placeholder}
        </Label>
        <Icon type="chevron" position={showOptions ? 'top' : 'down'} />
      </LabelContainer>
      {showOptions && (
        <Container>
          {options.map((item, index) => (
            <TransparentButton
              key={`dropdown-item-${index}`}
              onClick={() => handleItemSelected(item)}
            >
              {item.name}
            </TransparentButton>
          ))}
        </Container>
      )}
    </div>
  )
}
export default Dropdown
