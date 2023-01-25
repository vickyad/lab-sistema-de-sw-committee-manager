import { useContext, useEffect, useState } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { NoContentMessage } from '../../../styles/commonStyles'
import { comittee_mock } from '../../../_mock/comittee'

const History = () => {
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...comittee_mock,
  ])
  const { currentEntity: currentCommittee } = useContext(EntityContext)

  useEffect(() => {
    let content = [...comittee_mock]
    setComitteeContent(content)
  }, [])

  return (
    <>
      <HeaderSecondary
        headerTitle={`HISTÓRICO - ${currentCommittee.name}`}
        buttonType="export"
        backButtonMsg="voltar às comissões"
        handleExportOrSave={() => {
          /* TODO */
        }}
      />
      {comitteeContent.length > 0 ? (
        <Table
          type={'committee'}
          content={comitteeContent}
          showOptions={false}
        />
      ) : (
        <NoContentMessage>
          Não há histórico da comissão selecionada no momento
        </NoContentMessage>
      )}
    </>
  )
}
export default History
