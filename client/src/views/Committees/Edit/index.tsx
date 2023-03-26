import { useContext, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { CommitteeDetailsHeader } from '../../../data/committeeDetailsHeader'
import { FontBold, MainContainer } from '../../../styles/commonStyles'
import { committeeType } from '../../../types/contentTypes'
import { getEmptyEntity } from '../../../utils/EmptyEntity'
import RequestManager from '../../../utils/RequestManager'
import { memberOnCommittee_PatchDTO } from '../../../types/requestAnswerTypes'
import { formatDate_memberOnCommittee_PatchDTO, formatMemberOnCommittee_PatchDTO } from '../../../utils/FormatUtils'

const Edit = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const {
    currentEntity: currentCommittee,
    setCurrentEntity,
    setAction,
  } = useContext(EntityContext)
  const [committeeContent, setCommitteeContent] = useState<committeeType[]>([
    ...currentCommittee.content,
  ])

  const handleSaveChanges = () => {
    // TODO: save changes
    setAction(null)

    for(let i =0; i < committeeContent.length; i++) {
      let formated_member_content = formatMemberOnCommittee_PatchDTO(committeeContent[i].content, "committee_edit")
      RequestManager.updateMemberOnCommittee(currentCommittee.content[i].id, currentCommittee.id, formated_member_content)
    }
    setCurrentEntity({ ...getEmptyEntity(), content: undefined })
    // memberOnCommittee_PatchDTO
  }

  const handleCancelChanges = () => {
    setCommitteeContent(currentCommittee.content)
    setDisplayPopup(false)
    setAction(null)
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
