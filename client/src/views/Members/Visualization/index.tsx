import { useContext, useEffect, useState } from 'react'
import HeaderPrimary from '../../../components/Header/HeaderPrimary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { FontBold, MainContainer } from '../../../styles/commonStyles'
import { member_mock } from '../../../_mock/members'
import axios from 'axios'

const axios_member = axios.create({
  baseURL: "http://localhost:3000/member"
})
const axios_membersoncommittees = axios.create({
  baseURL: "http://localhost:3000/member_on_committee"
})

async function fetch_member_info() {
  // let result = [] as any[]

  // let resultResp = async() => { await axios_member.get("/all").then(res => {
  //   console.log([...res.data])
  //   console.log([...member_mock])
  //   result = res.data
  //   // setMemberContent(data);
  //   // setDisplayedContent(data);
  // }).catch(err => console.log(err))
  // }

  let result = await axios_member.get("/all")
      .then(res => res.data)
      .catch(err => console.log(err))
  
  // console.log("ab")
  // console.log(result)

  return result
}

async function fetch_membersoncommittees_info() {
  // let result = [] as any[]
  // let resultResp = async() => {
  //   await axios_membersoncommittees.get("/all").then(res => {
  //   console.log([res.data.filter((obj: any) => {
  //     return obj.member_id=== 4;
  //   }).length])
  //   console.log([...member_mock])
  //   result = res.data
  //   // setMemberContent(data);
  //   // setDisplayedContent(data);
  // }).catch(err => console.log(err))
  // }

  let result = await axios_membersoncommittees.get("/all")
      .then(res => res.data)
      .catch(err => console.log(err))

  // console.log('ae')
  // console.log(result)

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

  console.log(formated_member_info)

  return formated_member_info 
}


const Visualization = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [memberContent, setMemberContent] = useState<any[]>([...member_mock])
  const [displayedContent, setDisplayedContent] = useState<any[]>([
    ...member_mock,
  ])
  
  console.log(member_mock)

  async function fetch_and_format_member_info()
  {
    const member_info = await fetch_member_info()
    const membersoncommittee_info = await fetch_membersoncommittees_info()
    const formated_member_info = format_member_info(member_info, membersoncommittee_info)
    setMemberContent(formated_member_info)
    setDisplayedContent(formated_member_info)
    console.log(member_info)
    console.log(memberContent)
  }

  const {
    action,
    setAction,
    currentEntity: currentMember,
    setCurrentEntity: setCurrentMember,
  } = useContext(EntityContext)

  const closePopUp = () => {
    setDisplayPopup(false)
    setAction(null)
    setCurrentMember({ id: -1, name: '', content: undefined })
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
    
    // const temp = async() => {
    //   let members_trunc = (axios.get("localhost:3000/member/all")).data.keys()
    //   debugger;
    //   
    // }
  
    
    
    // let content = [...member_mock]
    // setMemberContent(content)
    // setDisplayedContent(content)
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
          handleClick={() => {
            /* TODO */
          }}
        />
        <Table type={'members'} content={displayedContent} />
      </MainContainer>
    </>
  )
}
export default Visualization
