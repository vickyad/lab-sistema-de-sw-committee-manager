import { useContext, useEffect, useRef, useState } from 'react'
import ExportableTable from '../../../components/ExportableTable'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Table from '../../../components/Table'
import Title from '../../../components/Title'
import { EntityContext } from '../../../context/CommitteeContext'
import { CommitteeTableHeader } from '../../../data/committeeHeader'
import { NoContentMessage } from '../../../styles/commonStyles'
import { committeeType } from '../../../types/contentTypes'
import { createPDF } from '../../../utils/CreatePDF'
import RequestManager from '../../../utils/RequestManager'
import { committee_mock } from '../../../_mock/committee'

const CommitteeHistory = () => {
  const { currentEntity: currentCommittee } = useContext(EntityContext)
  const [committeeContent, setCommitteeContent] = useState<committeeType[]>([])
  const [exportPDF, setExportPDF] = useState(false)
  const table = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (exportPDF) {
      try {
        createPDF(table, 'committee_history')
      } catch (e) {
        console.log(e)
      } finally {
        setExportPDF(false)
      }
    }
  }, [exportPDF])

  useEffect(() => {
    let content = committeeContent;
    (async() => {
      let answer = await RequestManager.getOneCommittee(currentCommittee.id)
      setCommitteeContent(answer)
    })()
    setCommitteeContent(content)
  }, []);

  
  console.log(committeeContent)

  return (
    <>
      {exportPDF ? (
        <div ref={table}>
          <Title type="secondary">HISTÓRICO - {currentCommittee.name}</Title>
          <ExportableTable type={'committee'} content={committeeContent} />
        </div>
      ) : (
        <>
          <HeaderSecondary
            headerTitle={`HISTÓRICO - ${currentCommittee.name}`}
            buttonType="export"
            backButtonMsg="voltar às comissões"
            handleExport={(type) => {
              type === 'pdf' && setExportPDF(true)
            }}
          />
          {committeeContent.length > 0 ? (
            <Table
              tableInfo={CommitteeTableHeader}
              type={'committee'}
              content={committeeContent}
              showOptions={false}
            />
          ) : (
            <NoContentMessage>
              Não há histórico da comissão selecionada no momento
            </NoContentMessage>
          )}
        </>
      )}
    </>
  )
}
export default CommitteeHistory
