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
import { getEmptyEntity } from '../../../utils/EmptyEntity'
import { comittee_mock } from '../../../_mock/comittee'

const Visualization = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...comittee_mock,
  ])
  const [displayedContent, setDisplayedContent] = useState<any[]>([
    ...comittee_mock,
  ])

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
    // TODO: desativar membro
    closePopUp()
  }

  useEffect(() => {
    if (action === 'deactivate') {
      setDisplayPopup(true)
    }
  }, [action])

  useEffect(() => {
    let content = [...comittee_mock]
    setComitteeContent(content)
    setDisplayedContent(content)
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
          handleExport={(type) => {
            /* TODO */
            console.log(type)
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
