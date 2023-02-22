import { useState } from 'react'
import { MemberDetailsHeader } from '../../data/membersDetailsHeader'
import { NoContentMessage } from '../../styles/commonStyles'
import Icon from '../Icon'
import Table from '../Table'
import { Container, ExpandButton } from './styles'
import { IMemberParticipations } from './types'

const MemberParticipations = ({
  activeContent,
  closedContent,
  exportMode = false,
}: IMemberParticipations) => {
  const [displayActive, setDisplayActive] = useState(true)
  const [displayClosed, setDisplayClosed] = useState(false)

  return (
    <Container>
      <ExpandButton onClick={() => setDisplayActive(!displayActive)}>
        Participações ativas
        <Icon type={displayActive ? 'minus' : 'plus'} />
      </ExpandButton>
      {(exportMode || displayActive) && (
        <>
          {activeContent.length > 0 ? (
            <Table
              tableInfo={MemberDetailsHeader}
              type={'members-details'}
              content={activeContent}
            />
          ) : (
            <NoContentMessage>
              Esse membro não participa de nenhuma comissão no momento
            </NoContentMessage>
          )}
        </>
      )}
      <ExpandButton onClick={() => setDisplayClosed(!displayClosed)}>
        Participações encerradas
        <Icon type={displayClosed ? 'minus' : 'plus'} />
      </ExpandButton>
      {(exportMode || displayClosed) && (
        <>
          {closedContent.length > 0 ? (
            <Table
              tableInfo={MemberDetailsHeader}
              type={'members-details'}
              content={closedContent}
            />
          ) : (
            <NoContentMessage>Não há histórico desse membro</NoContentMessage>
          )}
        </>
      )}
    </Container>
  )
}
export default MemberParticipations
