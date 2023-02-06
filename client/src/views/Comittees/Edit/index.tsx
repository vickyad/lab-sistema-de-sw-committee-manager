import { useContext, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { FontBold, MainContainer } from '../../../styles/commonStyles'
import { getEmptyEntity } from '../../../utils/EmptyEntity'

const Edit = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const {
    currentEntity: currentCommittee,
    setCurrentEntity,
    setAction,
  } = useContext(EntityContext)
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...currentCommittee.content,
  ])

  const handleSaveChanges = () => {
    // TODO: save changes
    setAction(null)
    setCurrentEntity({ ...getEmptyEntity(), content: undefined })
  }

  const handleCancelChanges = () => {
    setComitteeContent(currentCommittee.content)
    setDisplayPopup(false)
  }

  return (
    <>
      {displayPopup && (
        <Popup
          title={'Cancelar alterações'}
          action={'Continuar'}
          actionType={'important'}
          handleActionClick={handleCancelChanges}
          handleCancelClick={() => setDisplayPopup(false)}
        >
          Você tem certeza que deseja{' '}
          <FontBold>cancelar suas alterações</FontBold>? Essa ação não pode ser
          revertida
        </Popup>
      )}
      <MainContainer displayingPopup={displayPopup}>
        <HeaderSecondary
          headerTitle={`EDIÇÃO - ${currentCommittee.name}`}
          buttonType="save"
          backButtonMsg="voltar às comissões"
          handleExportOrSave={handleSaveChanges}
          handleCancel={() => setDisplayPopup(true)}
        />
        {comitteeContent.length > 0 && (
          <Table
            type={'committee-details'}
            editMode={true}
            content={comitteeContent}
            updateTable={(content) => setComitteeContent(content)}
          />
        )}
      </MainContainer>
    </>
  )
}
export default Edit
