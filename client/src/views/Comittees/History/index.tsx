import { useContext, useEffect, useState } from 'react'
import Button from '../../../components/Button'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Icon from '../../../components/Icon'
import Table from '../../../components/Table'
import { CommitteeContext } from '../../../context/CommitteeContext'
import { ComitteeTable } from '../../../data/comitteeTable'
import { NoContentMessage } from '../../../styles/commonStyles'
import { comittee_mock } from '../../../_mock/comittee'

const History = () => {
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...comittee_mock,
  ])
  const { setAction, currentCommittee } = useContext(CommitteeContext)

  useEffect(() => {
    console.log()
    let content = [...comittee_mock]
    setComitteeContent(content)
  }, [])

  return (
    <>
      <Button handleClick={() => setAction(null)} type="transparent">
        <Icon type="arrow-left" /> voltar ao home
      </Button>
      <HeaderSecondary
        headerTitle={`HISTÓRICO - ${currentCommittee.name}`}
        buttonType={'export'}
        handleClick={() => {
          /* TODO */
        }}
      />
      {comitteeContent.length > 0 ? (
        <Table
          type={'comittee'}
          content={comitteeContent}
          headerInfo={ComitteeTable}
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
