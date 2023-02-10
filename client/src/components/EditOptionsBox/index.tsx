import Icon from '../Icon'
import { Container, ImportantButton, TransparentButton } from './styles'
import { IOptionsBox } from './types'

const EditOptionsBox = ({
  type,
  handleEdit,
  handleDisable,
  handleSeeHistory,
}: IOptionsBox) => {
  return (
    <Container>
      {type === 'committee' && (
        <TransparentButton onClick={handleSeeHistory}>
          <Icon type="history" /> Ver histórico
        </TransparentButton>
      )}
      <TransparentButton onClick={handleEdit}>
        <Icon type="edit" /> Editar {type === 'committee' ? 'Órgão' : 'Membro'}
      </TransparentButton>
      <ImportantButton onClick={handleDisable}>
        <Icon type="disable" /> Desativar{' '}
        {type === 'committee' ? 'Órgão' : 'Membro'}
      </ImportantButton>
    </Container>
  )
}
export default EditOptionsBox
