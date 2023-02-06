import { useContext, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { FontBold, MainContainer } from '../../../styles/commonStyles'

const Edit = () => {
  const { currentEntity } = useContext(EntityContext)
  const [displayPopup, setDisplayPopup] = useState(false)
  const [memberContent, setMemberContent] = useState<any[]>([
    ...currentEntity.content,
  ])

  const handleCancelChanges = () => {
    setMemberContent(currentEntity.content)
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
          headerTitle={`EDIÇÃO - ${currentEntity.name}`}
          buttonType="save"
          backButtonMsg="voltar a membros em comissões"
          handleExportOrSave={() => {
            /* TODO */
          }}
          handleCancel={() => setDisplayPopup(true)}
        />
        {memberContent.length > 0 && (
          <Table
            type={'members-details'}
            editMode={true}
            content={memberContent}
            updateTable={(content) => setMemberContent(content)}
          />
        )}
      </MainContainer>
    </>
  )
}
export default Edit
