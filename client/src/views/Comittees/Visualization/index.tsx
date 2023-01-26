import { useEffect, useState } from 'react'
import HeaderPrimary from '../../../components/Header/HeaderPrimary'
import Table from '../../../components/Table'
import { MainContainer, NoContentMessage } from '../../../styles/commonStyles'
import { comittee_mock } from '../../../_mock/comittee'
import { IVisualization } from './types'

const Visualization = ({ blurBg }: IVisualization) => {
  const [searchtext, setSearchText] = useState('')
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...comittee_mock,
  ])
  const [displayedContent, setDisplayedContent] = useState<any[]>([
    ...comittee_mock,
  ])

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
    <MainContainer displayingPopup={blurBg}>
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
        <NoContentMessage>Não há comissões ativas no momento</NoContentMessage>
      )}
    </MainContainer>
  )
}
export default Visualization
