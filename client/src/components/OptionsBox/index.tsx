import Icon from '../Icon'
import { Container, ImportantButton, TransparentButton } from './styles'
import { IOptionsBox } from './types'

const OptionsBox = ({
  type,
  handleEdit,
  handleDisable,
  handleSeeHistory,
}: IOptionsBox) => {
  return (
    <Container>
      {type === 'comittee' && (
        <TransparentButton onClick={handleSeeHistory}>
          <Icon type="history" /> Ver histórico
        </TransparentButton>
      )}
      <TransparentButton onClick={handleEdit}>
        <Icon type="edit" /> Editar {type === 'comittee' ? 'Órgão' : 'Membro'}
      </TransparentButton>
      <ImportantButton onClick={handleDisable}>
        <Icon type="disable" /> Desativar{' '}
        {type === 'comittee' ? 'Órgão' : 'Membro'}
      </ImportantButton>
    </Container>
  )
}
export default OptionsBox
