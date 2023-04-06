import { useContext, useEffect, useRef, useState } from 'react'
import ExportableTable from '../../../components/ExportableTable'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Table from '../../../components/Table'
import Title from '../../../components/Title'
import { EntityContext } from '../../../context/CommitteeContext'
import { CommitteeTableHeader } from '../../../data/committeeHeader'
import { NoContentMessage } from '../../../styles/commonStyles'
import { committeeParticipation, committeeType } from '../../../types/contentTypes'
import { committeeGetAllAnswerEntry } from '../../../types/requestAnswerTypes'
import { getAndFormatAllCommitteeParticipations, getAndFormatOneCommitteeParticipations_withInactive } from '../../../utils/CommitteeUtils'
import { createPDF } from '../../../utils/CreatePDF'
import { formatCommittee } from '../../../utils/FormatUtils'
import RequestManager from '../../../utils/RequestManager'
import { committee_mock } from '../../../_mock/committee'

const CommitteeHistory = () => {
  const { currentEntity: currentCommittee } = useContext(EntityContext)
  const [committeeContent, setCommitteeContent] = useState(committee_mock)
  const [exportPDF, setExportPDF] = useState(false)
  const table = useRef<HTMLInputElement>(null)
  const [contentDisplayed, setContentDisplayed] = useState(false)

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

  

  const updateContent = () => {
    if(contentDisplayed == false){

    

      const request_answer = async () => {
      let committee_content: committeeType[] = []
        let committee_content_raw: committeeGetAllAnswerEntry =
          await RequestManager.getOneCommittee(currentCommittee.id)

        if (committee_content_raw) {
          let all_committee_details: committeeParticipation[][] = []
          all_committee_details = await getAndFormatOneCommitteeParticipations_withInactive(
            committee_content_raw
          )
          committee_content = formatCommittee(
            [committee_content_raw],
            all_committee_details
          )
        }
        setCommitteeContent(committee_content)
      }
      request_answer()

      setContentDisplayed(true)
    }
  }
  updateContent()

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
