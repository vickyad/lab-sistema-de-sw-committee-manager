import { useContext, useState } from 'react'
import { EntityContext } from '../../../context/CommitteeContext'
import { RelativeBox } from '../../../styles/commonStyles'
import Button from '../../Button'
import ExportOptionsBox from '../../ExportOptionsBox'
import Icon from '../../Icon'
import Title from '../../Title'
import { FlexBox, HeaderContainer } from './styles'
import { IHeader } from './types'

const HeaderSecondary = ({
  headerTitle,
  buttonType,
  backButtonMsg,
  handleSave,
  handleCancel,
  handleExport,
}: IHeader) => {
  const { setAction } = useContext(EntityContext)
  const [openOptions, setOpenOptions] = useState(false)

  return (
    <>
      <Button
        title={backButtonMsg}
        handleClick={() => setAction(null)}
        type="transparent"
      >
        <Icon type="arrow-left" /> {backButtonMsg}
      </Button>
      <HeaderContainer>
        <Title type="secondary">{headerTitle}</Title>
        {buttonType === 'save' ? (
          <FlexBox>
            {handleCancel && (
              <Button
                title="cancelar alterações"
                handleClick={handleCancel}
                type="attention"
              >
                <Icon type="cancel" />
                Cancelar alterações
              </Button>
            )}
            {handleSave && (
              <Button
                title="salvar alterações"
                handleClick={handleSave}
                type={'save'}
              >
                <Icon type={'save'} />
                Salvar alterações
              </Button>
            )}
          </FlexBox>
        ) : (
          <RelativeBox>
            {handleExport && (
              <>
                <Button
                  title="abrir opções para exportar dados"
                  handleClick={() => setOpenOptions(!openOptions)}
                  type="primary"
                >
                  <Icon type={'download'} />
                  Exportar dados
                </Button>
                {openOptions && (
                  <ExportOptionsBox
                    handleExportAsPDF={() => handleExport('pdf')}
                    handleExportAsCSV={() => handleExport('csv')}
                  />
                )}
              </>
            )}
          </RelativeBox>
        )}
      </HeaderContainer>
    </>
  )
}
export default HeaderSecondary
