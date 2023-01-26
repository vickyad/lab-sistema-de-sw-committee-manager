import { useContext, useEffect, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { committee_details_mock } from '../../../_mock/comittee'

const Edit = () => {
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...committee_details_mock,
  ])
  const { currentEntity } = useContext(EntityContext)

  useEffect(() => {
    let content = [...committee_details_mock]
    setComitteeContent(content)
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
      {comitteeContent.length > 0 && (
        <Table
          type={'members-details'}
          editMode={true}
          content={comitteeContent}
          updateTable={(content) => setComitteeContent(content)}
        />
      )}
    </>
  )
}
export default Edit
