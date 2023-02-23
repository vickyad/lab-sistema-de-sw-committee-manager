import { useState } from 'react'
import { MemberDetailsHeader } from '../../data/membersDetailsHeader'
import { NoContentMessage } from '../../styles/commonStyles'
import Button from '../Button'
import Icon from '../Icon'
import Table from '../Table'
import { Container } from './styles'
import { IMemberParticipations } from './types'

const MemberParticipations = ({
  active_participations,
  history,
  exportMode = false,
}: IMemberParticipations) => {
  const [displayActive, setDisplayActive] = useState(true)
  const [displayClosed, setDisplayClosed] = useState(false)

  return (
    <Container>
      <Button
        title={`${
          displayActive ? 'ocultar' : 'mostrar'
        } participações ativas do membro`}
        type="subsection"
        handleClick={() => setDisplayActive(!displayActive)}
      >
        Participações ativas
        <Icon type={displayActive ? 'minus' : 'plus'} />
      </Button>
      {(exportMode || displayActive) && (
        <>
          {active_participations.length > 0 ? (
            <Table
              tableInfo={MemberDetailsHeader}
              type={'members-details'}
              content={active_participations}
            />
          ) : (
            <NoContentMessage>
              Esse membro não participa de nenhuma comissão no momento
            </NoContentMessage>
          )}
        </>
      )}
      <Button
        title={`${
          displayActive ? 'ocultar' : 'mostrar'
        } histórico de participações do membro`}
        type="subsection"
        handleClick={() => setDisplayClosed(!displayClosed)}
      >
        Participações encerradas
        <Icon type={displayClosed ? 'minus' : 'plus'} />
      </Button>
      {(exportMode || displayClosed) && (
        <>
          {history.length > 0 ? (
            <Table
              tableInfo={MemberDetailsHeader}
              type={'members-details'}
              content={history}
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
