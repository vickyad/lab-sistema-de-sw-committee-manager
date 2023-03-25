import { useContext, useEffect, useRef, useState } from 'react'
import ExportableTable from '../../../components/ExportableTable'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Table from '../../../components/Table'
import Title from '../../../components/Title'
import { EntityContext } from '../../../context/CommitteeContext'
import { CommitteeDetailsHeader } from '../../../data/committeeDetailsHeader'
import { createPDF } from '../../../utils/CreatePDF'

const FunctionHistory = () => {
  const { currentEntity } = useContext(EntityContext)
  const [exportPDF, setExportPDF] = useState(false)
  const table = useRef<HTMLInputElement>(null)
  const [committeeContent, setCommitteeContent] = useState<any[]>([])

  useEffect(() => {
    // TODO: use currentEntity.id or curentEntity.name to get the correct info

    let content = [] as any[]
    setCommitteeContent(content)
   
  }, [])
 
  useEffect(() => {
    if (exportPDF) {
      try {
        createPDF(table, 'committees')
      } catch (e) {
        console.log(e)
      } finally {
        setExportPDF(false)
      }
    }
  }, [exportPDF])

  return (
    <>
      {exportPDF ? (
        <div ref={table}>
          <Title type="secondary"> HISTÓRICO - {currentEntity.name} </Title>
          <ExportableTable
            type={'committee-details'}
            content={committeeContent}
          />
        </div>
      ) : (
        <>
          <HeaderSecondary
            headerTitle={`HISTÓRICO - ${currentEntity.name}`}
            buttonType="export"
            backButtonMsg="voltar às comissões"
            handleExport={(type) => {
              type === 'pdf' && setExportPDF(true)
            }}
          />
          <Table
            tableInfo={CommitteeDetailsHeader}
            type={'committee-details'}
            content={committeeContent}
          />
        </>
      )}
    </>
  )
}
export default FunctionHistory
