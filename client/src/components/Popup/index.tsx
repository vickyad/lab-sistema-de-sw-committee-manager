import { ActionButton, Button, Container, Description, Header } from './styles'
import { IPopup } from './types'

const Popup = ({
  children,
  title,
  action,
  actionType,
  handleActionClick,
  handleCancelClick,
}: IPopup) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Description>{children}</Description>
      <div>
        <Button onClick={handleCancelClick}>Cancel</Button>
        <ActionButton onClick={handleActionClick} color={actionType}>
          {action}
        </ActionButton>
      </div>
    </Container>
  )
}
export default Popup
