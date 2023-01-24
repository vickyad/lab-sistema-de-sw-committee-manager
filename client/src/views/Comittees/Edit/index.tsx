import { useContext, useEffect, useState } from 'react'
import Button from '../../../components/Button'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Icon from '../../../components/Icon'
import Table from '../../../components/Table'
import { CommitteeContext } from '../../../context/CommitteeContext'
import { ComitteeDetailsTable } from '../../../data/comitteeDetailsHeader'
import { details_mock } from '../../../_mock/comittee'

const Edit = () => {
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...details_mock,
  ])
  const { currentCommittee } = useContext(CommitteeContext)

  useEffect(() => {
    console.log()
    let content = [...details_mock]
    setComitteeContent(content)
  }, [])

  return (
    <>
      <HeaderSecondary
        headerTitle={`EDIÇÃO - ${currentCommittee.name}`}
        buttonType="save"
        backButtonMsg="voltar às comissões"
        handleClick={() => {
          /* TODO */
        }}
      />
      {comitteeContent.length > 0 && (
        <Table
          type={'details'}
          editMode={true}
          content={comitteeContent}
          headerInfo={ComitteeDetailsTable}
          updateTable={(content) => setComitteeContent(content)}
        />
      )}
    </>
  )
}
export default Edit
