import { useEffect, useState } from 'react'
import HeaderPrimary from '../../../components/Header/HeaderPrimary'
import Table from '../../../components/Table'
import { MainContainer } from '../../../styles/commonStyles'
import { member_mock } from '../../../_mock/members'
import { IVisualization } from '../../Comittees/Visualization/types'

const Visualization = ({ blurBg }: IVisualization) => {
  const [searchtext, setSearchText] = useState('')
  const [memberContent, setMemberContent] = useState<any[]>([...member_mock])
  const [displayedContent, setDisplayedContent] = useState<any[]>([
    ...member_mock,
  ])

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
    <MainContainer displayingPopup={blurBg}>
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
  )
}
export default Visualization
