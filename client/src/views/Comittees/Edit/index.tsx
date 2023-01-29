import { useContext, useEffect, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'

const Edit = () => {
  const { currentEntity: currentCommittee } = useContext(EntityContext)
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...currentCommittee.content,
  ])

  return (
    <>
      <HeaderSecondary
        headerTitle={`EDIÇÃO - ${currentCommittee.name}`}
        buttonType="save"
        backButtonMsg="voltar às comissões"
        handleExportOrSave={() => {
          /* TODO */
        }}
        handleCancel={() => setComitteeContent(currentCommittee.content)}
      />
      {comitteeContent.length > 0 && (
        <Table
          type={'committee-details'}
          editMode={true}
          content={comitteeContent}
          updateTable={(content) => setComitteeContent(content)}
        />
      )}
    </>
  )
}
export default Edit
