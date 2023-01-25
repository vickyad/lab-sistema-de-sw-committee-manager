import { useContext } from 'react'
import { EntityContext } from '../../../context/CommitteeContext'
import Button from '../../Button'
import Icon from '../../Icon'
import Title from '../../Title'
import { HeaderContainer } from './styles'
import { IHeader } from './types'

const HeaderSecondary = ({
  headerTitle,
  buttonType,
  handleExportOrSave,
  backButtonMsg,
}: IHeader) => {
  const { setAction } = useContext(EntityContext)

  return (
    <>
      <Button handleClick={() => setAction(null)} type="transparent">
        <Icon type="arrow-left" /> {backButtonMsg}
      </Button>
      <HeaderContainer>
        <Title type="secondary">{headerTitle}</Title>
        <Button
          handleClick={handleExportOrSave}
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
    </>
  )
}
export default HeaderSecondary
