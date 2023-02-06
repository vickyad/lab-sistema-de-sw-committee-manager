import { useContext, useEffect, useState } from 'react'
import HeaderPrimary from '../../../components/Header/HeaderPrimary'
import Popup from '../../../components/Popup'
import Table from '../../../components/Table'
import { EntityContext } from '../../../context/CommitteeContext'
import { FontBold, MainContainer } from '../../../styles/commonStyles'
import { getEmptyEntity } from '../../../utils/EmptyEntity'
import { member_mock } from '../../../_mock/members'

const Visualization = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [memberContent, setMemberContent] = useState<any[]>([...member_mock])
  const [displayedContent, setDisplayedContent] = useState<any[]>([
    ...member_mock,
  ])

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
          handleExport={(type) => {
            /* TODO */
            console.log(type)
          }}
        />
        <Table type={'members'} content={displayedContent} />
      </MainContainer>
    </>
  )
}
export default Visualization
