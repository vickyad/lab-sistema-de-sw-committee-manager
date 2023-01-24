import { useEffect, useState } from 'react'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import Icon from '../../../components/Icon'
import Table from '../../../components/Table'
import Title from '../../../components/Title'
import { ComitteeTable } from '../../../data/comitteeTable'
import { NoContentMessage } from '../../../styles/commonStyles'
import { comittee_mock } from '../../../_mock/comittee'
import { Container } from '../styles'
import { IHistory } from './types'

const History = ({id}: IHistory) => {
  const [comitteeContent, setComitteeContent] = useState<any[]>([
    ...comittee_mock,
  ])
  const [displayedContent, setDisplayedContent] = useState<any[]>([
    ...comittee_mock,
  ])

  useEffect(() => {
    console.log(id)
    let content = [...comittee_mock]
    setComitteeContent(content)
    setDisplayedContent(content)
  }, [])

  
  return (
    <>
      <Button handleClick={() => console.log('nha')} type='transparent'><Icon type='back'/> voltar ao home</Button>
      <Title type={'secondary'}> Histórico Comissões - REDACTED</Title>
        {displayedContent.length > 0 ? (
            <Table
            type={'comittee'}
            content={displayedContent}
            headerInfo={ComitteeTable}
            />
        ) : (
            <NoContentMessage>Não há histórico da comissão selecionada no momento</NoContentMessage>
        )}
    </>
  )
}
export default History
