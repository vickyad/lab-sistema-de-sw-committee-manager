import { useContext, useEffect, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { member_details_mock } from '../../../_mock/members'

const Edit = () => {
  const [memberContent, setMemberContent] = useState<any[]>([
    ...member_details_mock.active_participations,
  ])
  const { currentEntity } = useContext(EntityContext)

  useEffect(() => {
    let content = [...member_details_mock.active_participations]
    setMemberContent(content)
  }, [])

  return (
    <>
      <HeaderSecondary
        headerTitle={`EDIÇÃO - ${currentEntity.name}`}
        buttonType="save"
        backButtonMsg="voltar a membros em comissões"
        handleExportOrSave={() => {
          /* TODO */
        }}
      />
      {memberContent.length > 0 && (
        <Table
          type={'members-details'}
          editMode={true}
          content={memberContent}
          updateTable={(content) => setMemberContent(content)}
        />
      )}
    </>
  )
}
export default Edit
