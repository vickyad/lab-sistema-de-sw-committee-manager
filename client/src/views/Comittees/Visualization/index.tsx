import { useContext, useEffect, useState } from 'react'
import HeaderPrimary from '../../../components/Header/HeaderPrimary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import {
  FontBold,
  MainContainer,
  NoContentMessage,
} from '../../../styles/commonStyles'
import { comittee_mock } from '../../../_mock/comittee'
import axios from 'axios'

const axios_committee = axios.create({
  baseURL: "http://localhost:3000/committee"
})
const axios_membersoncommittees = axios.create({
  baseURL: "http://localhost:3000/member_on_committee"
})

async function fetch_committee_info() {
  let result = await axios_committee.get("/all")
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

function format_committee_info(committee_info: any[]) {
  let formated_committee_info = [] as any[]

  committee_info.forEach( (committee : any) => {
    let formated_date_duration = "-"

    if(committee.begin_date != null && committee.end_date != null){
      formated_date_duration = committee.begin_date.substring(0, 9) + " a " + committee.end_date.substring(0, 9)
    }

    formated_committee_info.push({id: committee.id, 
                              content: [committee.name, 
                                committee.bond, 
                                committee.ordinance, 
                                formated_date_duration,
                                committee.term + "°"]})
  })

  return formated_committee_info
}

const Visualization = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [comitteeContent, setComitteeContent] = useState<any[]>([])
  const [displayedContent, setDisplayedContent] = useState<any[]>([])

  async function fetch_and_format_committee_info()
  {
    const committee_info = await fetch_committee_info()
    const formated_committee_info = format_committee_info(committee_info)
    setComitteeContent(formated_committee_info)
    setDisplayedContent(formated_committee_info)
  }

  const {
    action,
    setAction,
    currentEntity: currentCommittee,
    setCurrentEntity: setCurrentCommittee,
  } = useContext(EntityContext)

  const closePopUp = () => {
    setDisplayPopup(false)
    setAction(null)
    setCurrentCommittee({ id: -1, name: '', content: undefined })
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
    fetch_and_format_committee_info()
  }, [])

  useEffect(() => {
    if (searchtext.length > 0) {
      let searchTextLowerCase = searchtext.toLowerCase()
      let newComittee = [...comitteeContent]
      newComittee = newComittee.filter((item) => {
        let comitteeNameLowerCase = item.content[0].toLowerCase()
        return comitteeNameLowerCase.includes(searchTextLowerCase)
      })
      setDisplayedContent(newComittee)
    } else {
      setDisplayedContent(comitteeContent)
    }
  }, [searchtext, comitteeContent])

  return (
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
          <FontBold>{currentCommittee.name}</FontBold>? Essa ação não pode ser
          revertida
        </Popup>
      )}
      <MainContainer displayingPopup={displayPopup}>
        <HeaderPrimary
          headerTitle="Comissões"
          searchPlaceholder="Pesquise por órgão..."
          searchText={searchtext}
          setSearchText={(input) => setSearchText(input)}
          handleClick={() => {
            /* TODO */
          }}
        />
        {displayedContent.length > 0 ? (
          <Table type={'committee'} content={displayedContent} />
        ) : (
          <NoContentMessage>
            Não há comissões ativas no momento
          </NoContentMessage>
        )}
      </MainContainer>
    </>
  )
}
export default Visualization
