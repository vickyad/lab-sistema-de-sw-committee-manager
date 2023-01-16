import {
  CardButton,
  AttentionButton,
  SaveButton,
  TransparentButton,
  DefaultButton,
  SecondaryButton,
} from './styles'
import { IButton } from './types'

const Button = ({ children, handleClick, type, color = 'black' }: IButton) => {
  const getButton = () => {
    switch (type) {
      case 'save':
        return <SaveButton onClick={handleClick}>{children}</SaveButton>

      case 'attention':
        return (
          <AttentionButton onClick={handleClick}>{children}</AttentionButton>
        )
      case 'card':
        return <CardButton onClick={handleClick}>{children}</CardButton>
      case 'transparent':
        return (
          <TransparentButton onClick={handleClick} color={color}>
            {children}
          </TransparentButton>
        )
      case 'secondary':
        return (
          <SecondaryButton onClick={handleClick}>{children}</SecondaryButton>
        )
      case 'primary':
      default:
        return <DefaultButton onClick={handleClick}>{children}</DefaultButton>
    }
  }
  return getButton()
}
export default Button
