import { useContext, useEffect, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { committee_details_mock } from '../../../_mock/comittee'

const Edit = () => {
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...committee_details_mock,
  ])
  const { currentEntity: currentCommittee } = useContext(EntityContext)

  useEffect(() => {
    let content = [...committee_details_mock]
    setComitteeContent(content)
  }, [])

  return (
    <>
      <HeaderSecondary
        headerTitle={`EDIÇÃO - ${currentCommittee.name}`}
        buttonType="save"
        backButtonMsg="voltar às comissões"
        handleExportOrSave={() => {
          /* TODO */
        }}
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
