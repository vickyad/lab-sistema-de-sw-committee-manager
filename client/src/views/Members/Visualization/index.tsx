import { useContext, useEffect, useRef, useState } from 'react'
import ExportableTable from '../../../components/ExportableTable'
import HeaderPrimary from '../../../components/Header/HeaderPrimary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import Title from '../../../components/Title'
import { EntityContext } from '../../../context/CommitteeContext'
import { FontBold, MainContainer } from '../../../styles/commonStyles'
import { createPDF } from '../../../utils/CreatePDF'
import { getEmptyEntity } from '../../../utils/EmptyEntity'
import { member_mock } from '../../../_mock/members'

const Visualization = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [memberContent, setMemberContent] = useState<any[]>([...member_mock])
  const [displayedContent, setDisplayedContent] = useState<any[]>([
    ...member_mock,
  ])
  const [exportPDF, setExportPDF] = useState(false)
  const table = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (exportPDF) {
      try {
        createPDF(table, 'members_on_committees')
      } catch (e) {
        console.log(e)
      } finally {
        setExportPDF(false)
      }
    }
  }, [exportPDF])

  const {
    action,
    setAction,
    currentEntity: currentMember,
    setCurrentEntity: setCurrentMember,
  } = useContext(EntityContext)

  const closePopUp = () => {
    setDisplayPopup(false)
    setAction(null)
    setCurrentMember({ ...getEmptyEntity(), content: undefined })
  }

  const handleDeactivateCommittee = () => {
    // TODO: desativar membro
    closePopUp()
  }

  useEffect(() => {
    if (action === 'deactivate') {
      setDisplayPopup(true)
    }
  }, [action])

  useEffect(() => {
    let content = [...member_mock]
    setMemberContent(content)
    setDisplayedContent(content)

    if (action === 'search-member') {
      setSearchText(currentMember.name)
    }
  }, [])

  useEffect(() => {
    if (searchtext.length > 0) {
      let searchTextLowerCase = searchtext.toLowerCase()
      let newComittee = [...memberContent]
      newComittee = newComittee.filter((item) => {
        let comitteeNameLowerCase = item.content[0].toLowerCase()
        return comitteeNameLowerCase.includes(searchTextLowerCase)
      })
      setDisplayedContent(newComittee)
    } else {
      setDisplayedContent(memberContent)
    }
  }, [searchtext, memberContent])

  return (
    <>
      {exportPDF ? (
        <div ref={table}>
          <Title type="secondary">Comissões por pessoa</Title>
          <ExportableTable type={'members'} content={displayedContent} />
        </div>
      ) : (
        <>
          {displayPopup && (
            <Popup
              title={'Desativar Membro'}
              action={'Desativar Membro'}
              actionType={'important'}
              handleActionClick={handleDeactivateCommittee}
              handleCancelClick={closePopUp}
            >
              Você tem certeza que deseja desativar{' '}
              <FontBold>{currentMember.name}</FontBold>? Essa ação não pode ser
              revertida
            </Popup>
          )}
          <MainContainer displayingPopup={displayPopup}>
            <HeaderPrimary
              headerTitle="Comissões por pessoa"
              searchPlaceholder="Pesquise pelo nome do funcionário..."
              searchText={searchtext}
              setSearchText={(input) => setSearchText(input)}
              handleExport={(type) => {
                type && setExportPDF(true)
              }}
            />
            <Table type={'members'} content={displayedContent} />
          </MainContainer>
        </>
      )}
    </>
  )
}
export default Visualization
