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
import axios from 'axios'

const axios_member = axios.create({
  baseURL: "http://localhost:3000/member"
})
const axios_membersoncommittees = axios.create({
  baseURL: "http://localhost:3000/member_on_committee"
})

async function fetch_member_info() {
  let result = await axios_member.get("/all")
      .then(res => res.data)
      .catch(err => console.log(err))

  return result
}

async function fetch_membersoncommittees_info() {
  let result = await axios_membersoncommittees.get("/all")
      .then(res => res.data)
      .catch(err => console.log(err))

  return result
}

function format_member_info(member_info: any[], membersoncommittee_info: any[]) {
  let formated_member_info = [] as any[]

  member_info.forEach( (member : any) => {
    let number_of_comissions = membersoncommittee_info.filter((obj: any) => {
      return obj.member_id=== member.id;
    }).length

    formated_member_info.push({id: member.id, content: [member.name, number_of_comissions]})
  })

  return formated_member_info 
}

const Visualization = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [memberContent, setMemberContent] = useState<any[]>([])
  const [displayedContent, setDisplayedContent] = useState<any[]>([])

  async function fetch_and_format_member_info()
  {
    const member_info = await fetch_member_info()
    const membersoncommittee_info = await fetch_membersoncommittees_info()
    const formated_member_info = format_member_info(member_info, membersoncommittee_info)
    setMemberContent(formated_member_info)
    setDisplayedContent(formated_member_info)
  }
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
    fetch_and_format_member_info()

    if (action === 'search') {
      setSearchText(currentMember.name)
    }
  }, [])

  useEffect(() => {
    if (searchtext.length > 0) {
      let searchTextLowerCase = searchtext.toLowerCase()
      let newComittee = [...memberContent]
      newComittee = newComittee.filter((item) => {
        let committeeNameLowerCase = item.content[0].toLowerCase()
        return committeeNameLowerCase.includes(searchTextLowerCase)
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
