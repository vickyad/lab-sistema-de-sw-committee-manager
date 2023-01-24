import Button from '../../Button'
import Icon from '../../Icon'
import Title from '../../Title'
import { HeaderContainer } from './styles'
import { IHeader } from './types'

const HeaderSecondary = ({ headerTitle, buttonType, handleClick }: IHeader) => {
  return (
    <HeaderContainer>
      <Title type="secondary">{headerTitle}</Title>
      <Button
        handleClick={handleClick}
        type={buttonType === 'export' ? 'primary' : 'save'}
      >
        {buttonType === 'export' ? (
          <>
            <Icon type={'download'} />
            Exportar dados
          </>
        ) : (
          <>
            <Icon type={'save'} />
            Salvar alterações
          </>
        )}
      </Button>
    </HeaderContainer>
  )
}
export default HeaderSecondary
