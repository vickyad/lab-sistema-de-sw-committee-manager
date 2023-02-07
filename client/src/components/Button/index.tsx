import {
  CardButton,
  AttentionButton,
  SaveButton,
  TransparentButton,
  DefaultButton,
  SecondaryButton,
} from './styles'
import { IButton } from './types'

const Button = ({
  children,
  handleClick,
  type,
  color = 'black',
  fontSize = 'default',
}: IButton) => {
  const getButton = () => {
    switch (type) {
      case 'save':
        return (
          <SaveButton onClick={handleClick} fontSize={fontSize}>
            {children}
          </SaveButton>
        )
      case 'attention':
        return (
          <AttentionButton onClick={handleClick} fontSize={fontSize}>
            {children}
          </AttentionButton>
        )
      case 'card':
        return (
          <CardButton onClick={handleClick} fontSize={fontSize}>
            {children}
          </CardButton>
        )
      case 'transparent':
        return (
          <TransparentButton onClick={handleClick} color={color}>
            {children}
          </TransparentButton>
        )
      case 'secondary':
        return (
          <SecondaryButton onClick={handleClick} fontSize={fontSize}>
            {children}
          </SecondaryButton>
        )
      case 'primary':
      default:
        return (
          <DefaultButton onClick={handleClick} fontSize={fontSize}>
            {children}
          </DefaultButton>
        )
    }
  }
  return getButton()
}
export default Button
