import { useContext, useEffect, useRef, useState } from 'react'
import ExportableTable from '../../../components/ExportableTable'
import HeaderPrimary from '../../../components/Header/HeaderPrimary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import Title from '../../../components/Title'
import { EntityContext } from '../../../context/CommitteeContext'
import {
  FontBold,
  MainContainer,
  NoContentMessage,
} from '../../../styles/commonStyles'
import { createPDF } from '../../../utils/CreatePDF'
import { getEmptyEntity } from '../../../utils/EmptyEntity'
import RequestManager from '../../../utils/RequestManager'
import { formatCommittee } from '../../../utils/FormatUtils'
import { getAndFormatAllCommitteeParticipations } from '../../../utils/CommitteeUtils'
import {
  committeeParticipation,
  committeeType,
} from '../../../types/contentTypes'
import { committeeGetAllAnswerEntry, committeeGetOneAnswer } from '../../../types/requestAnswerTypes'
import { CommitteeTableHeader } from '../../../data/committeeHeader'
import { committeeContentType } from '../../../types/contentTypes'

const Visualization = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [committeeContent, setCommitteeContent] = useState<committeeType[]>([])
  const [displayedContent, setDisplayedContent] = useState<committeeType[]>([])
  const [exportPDF, setExportPDF] = useState(false)
  const table = useRef<HTMLInputElement>(null)

  const {
    action,
    setAction,
    currentEntity: currentCommittee,
    setCurrentEntity: setCurrentCommittee,
  } = useContext(EntityContext)

  const closePopUp = () => {
    setDisplayPopup(false)
    setAction(null)
    setCurrentCommittee({ ...getEmptyEntity(), content: undefined })
  }

  const handleDeactivateCommittee = () => {
    const request_committee_info = async () => {
      let committee_content: committeeGetOneAnswer =
        await RequestManager.getOneCommittee(currentCommittee.id)

      if (committee_content) {
        await RequestManager.deactivateCommittee(committee_content.id, committee_content.bond)

        const request_updated_commission_list = async () => {
          let committee_content: committeeType[] = []
          let committee_content_raw: committeeGetAllAnswerEntry[] =
            await RequestManager.getAllCommittees()
    
          if (committee_content_raw) {
            let all_committee_details: committeeParticipation[][] = []
            all_committee_details = await getAndFormatAllCommitteeParticipations(
              committee_content_raw
            )
            committee_content = formatCommittee(
              committee_content_raw,
              all_committee_details
            )
          }
    
          setCommitteeContent(committee_content)
          setDisplayedContent(committee_content)
        }
        request_updated_commission_list()
      }
    }
    request_committee_info()
    closePopUp()
  }

  useEffect(() => {
    if (action === 'deactivate') {
      setDisplayPopup(true)
    }
  }, [action])

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

  useEffect(() => {
    const request_answer = async () => {
      let committee_content: committeeType[] = []
      let committee_content_raw: committeeGetAllAnswerEntry[] =
        await RequestManager.getAllCommittees()

      if (committee_content_raw) {
        let all_committee_details: committeeParticipation[][] = []
        all_committee_details = await getAndFormatAllCommitteeParticipations(
          committee_content_raw
        )
        committee_content = formatCommittee(
          committee_content_raw,
          all_committee_details
        )
      }

      setCommitteeContent(committee_content)
      setDisplayedContent(committee_content)
    }
    request_answer()

    if (action === 'search') {
      setSearchText(currentCommittee.name)
    }
  }, [])

  useEffect(() => {
    if (searchtext.length > 0) {
      let searchTextLowerCase = searchtext.toLowerCase()
      let newComittee = [...committeeContent]
      newComittee = newComittee.filter((row) => {
        let hasContentRelated = false
        for (let i = 0; i < 4; i++) {
          let itemLowerCase = row.content[i].toLowerCase()
          if (itemLowerCase.includes(searchTextLowerCase)) {
            hasContentRelated = true
          }
        }

        row.participation_details.forEach((item) => {
          item.content.forEach((value) => {
            let itemLowerCase = value.toLowerCase()
            if (itemLowerCase.includes(searchTextLowerCase)) {
              hasContentRelated = true
            }
          })
        })
        return hasContentRelated
      })
      setDisplayedContent(newComittee)
    } else {
      setDisplayedContent(committeeContent)
    }
  }, [searchtext, committeeContent])

  return (
    <>
      {exportPDF ? (
        <div ref={table}>
          <Title type="primary">Comissões</Title>
          <ExportableTable type={'committee'} content={displayedContent} />
        </div>
      ) : (
        <>
          {displayPopup && (
            <Popup
              title={'Desativar Órgão'}
              action={'Desativar Órgão'}
              actionType={'important'}
              handleActionClick={handleDeactivateCommittee}
              handleCancelClick={() => setDisplayPopup(false)}
            >
              Você tem certeza que deseja desativar{' '}
              <FontBold>{currentCommittee.name}</FontBold>? Essa ação não pode
              ser revertida
            </Popup>
          )}
          <MainContainer displayingPopup={displayPopup}>
            <HeaderPrimary
              headerTitle="Comissões"
              searchPlaceholder="Pesquise por órgão..."
              searchText={searchtext}
              setSearchText={(input) => setSearchText(input)}
              handleExport={(type) => {
                type === 'pdf' && setExportPDF(true)
              }}
            />
            {displayedContent.length > 0 ? (
              <Table
                tableInfo={CommitteeTableHeader}
                type={'committee'}
                content={displayedContent}
              />
            ) : (
              <NoContentMessage>
                Não há comissões ativas no momento
              </NoContentMessage>
            )}
          </MainContainer>
        </>
      )}
    </>
  )
}
export default Visualization
