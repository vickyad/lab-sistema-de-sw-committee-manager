import { useContext } from 'react'
import { EntityContext } from '../../../context/CommitteeContext'
import Button from '../../Button'
import Icon from '../../Icon'
import Title from '../../Title'
import { FlexBox, HeaderContainer } from './styles'
import { IHeader } from './types'

const HeaderSecondary = ({
  headerTitle,
  buttonType,
  backButtonMsg,
  handleExportOrSave,
  handleCancel,
}: IHeader) => {
  const { setAction } = useContext(EntityContext)

  return (
    <>
      <Button handleClick={() => setAction(null)} type="transparent">
        <Icon type="arrow-left" /> {backButtonMsg}
      </Button>
      <HeaderContainer>
        <Title type="secondary">{headerTitle}</Title>
        {buttonType === 'save' ? (
          <FlexBox>
            {handleCancel && (
              <Button handleClick={handleCancel} type="attention">
                <Icon type="cancel" />
                Cancelar alterações
              </Button>
            )}
            {handleExportOrSave && (
              <Button handleClick={handleExportOrSave} type={'save'}>
                <Icon type={'save'} />
                Salvar alterações
              </Button>
            )}
          </FlexBox>
        ) : (
          <>
            {handleExportOrSave && (
              <Button handleClick={handleExportOrSave} type="primary">
                <Icon type={'download'} />
                Exportar dados
              </Button>
            )}
          </>
        )}
      </HeaderContainer>
    </>
  )
}
export default HeaderSecondary
