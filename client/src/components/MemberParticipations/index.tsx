import { useState } from 'react'
import Icon from '../Icon'
import Table from '../Table'
import { Container, ExpandButton } from './styles'
import { IMemberParticipations } from './types'

const MemberParticipations = ({
  activeContent,
  closedContent,
}: IMemberParticipations) => {
  const [displayActive, setDisplayActive] = useState(true)
  const [displayClosed, setDisplayClosed] = useState(false)

  return (
    <Container>
      <ExpandButton onClick={() => setDisplayActive(!displayActive)}>
        Participações ativas
        <Icon type={displayActive ? 'minus' : 'plus'} />
      </ExpandButton>
      {displayActive && (
        <Table type={'members-details'} content={activeContent} />
      )}
      <ExpandButton onClick={() => setDisplayClosed(!displayClosed)}>
        Participações encerradas
        <Icon type={displayClosed ? 'minus' : 'plus'} />
      </ExpandButton>
      {displayClosed && (
        <Table type={'members-details'} content={closedContent} />
      )}
    </Container>
  )
}
export default MemberParticipations
