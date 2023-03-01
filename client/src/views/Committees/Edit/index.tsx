import { useContext, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { CommitteeDetailsHeader } from '../../../data/committeeDetailsHeader'
import { FontBold, MainContainer } from '../../../styles/commonStyles'
import { getEmptyEntity } from '../../../utils/EmptyEntity'

const Edit = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const {
    currentEntity: currentCommittee,
    setCurrentEntity,
    setAction,
  } = useContext(EntityContext)
  const [committeeContent, setCommitteeContent] = useState<any[]>([
    ...currentCommittee.content,
  ])

  const handleSaveChanges = () => {
    // TODO: save changes
    setAction(null)
    setCurrentEntity({ ...getEmptyEntity(), content: undefined })
  }

  const handleCancelChanges = () => {
    setCommitteeContent(currentCommittee.content)
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
          handleSave={handleSaveChanges}
          handleCancel={() => setDisplayPopup(true)}
        />
        {committeeContent.length > 0 && (
          <Table
            tableInfo={CommitteeDetailsHeader}
            type={'committee-details'}
            editMode={true}
            content={committeeContent}
            onUpdateTable={(content) => setCommitteeContent(content)}
          />
        )}
      </MainContainer>
    </>
  )
}
export default Edit
