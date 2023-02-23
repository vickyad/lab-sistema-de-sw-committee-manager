import {
  CardButton,
  AttentionButton,
  SaveButton,
  TransparentButton,
  DefaultButton,
  SecondaryButton,
  SubsectionButton,
} from './styles'
import { IButton } from './types'

const Button = ({
  title,
  children,
  handleClick,
  type,
  color,
  fontSize = 'default',
  noBorder = false,
  svgStroke = false,
}: IButton) => {
  const getButton = () => {
    switch (type) {
      case 'subsection':
        return (
          <SubsectionButton
            onClick={handleClick}
            title={title}
            fontSize={fontSize}
          >
            {children}
          </SubsectionButton>
        )
      case 'save':
        return (
          <SaveButton onClick={handleClick} title={title} fontSize={fontSize}>
            {children}
          </SaveButton>
        )
      case 'attention':
        return (
          <AttentionButton
            onClick={handleClick}
            title={title}
            fontSize={fontSize}
            noBorder={noBorder}
          >
            {children}
          </AttentionButton>
        )
      case 'card':
        return (
          <CardButton onClick={handleClick} title={title} fontSize={fontSize}>
            {children}
          </CardButton>
        )
      case 'transparent':
        return (
          <TransparentButton
            onClick={handleClick}
            title={title}
            color={color}
            svgStroke={svgStroke}
          >
            {children}
          </TransparentButton>
        )
      case 'secondary':
        return (
          <SecondaryButton
            onClick={handleClick}
            title={title}
            fontSize={fontSize}
          >
            {children}
          </SecondaryButton>
        )
      case 'primary':
      default:
        return (
          <DefaultButton
            onClick={handleClick}
            title={title}
            fontSize={fontSize}
          >
            {children}
          </DefaultButton>
        )
    }
  }
  return getButton()
}
export default Button
