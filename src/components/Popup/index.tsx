import { ActionButton, Button, Container, Description, Header } from './styles'

const Popup = ({
  children,
  title,
  action,
  actionType,
  handleActionClick,
  handleCancelClick,
}: {
  title: string
  children: React.ReactNode
  action: string
  actionType: 'save' | 'important'
  handleActionClick: () => void
  handleCancelClick: () => void
}) => {
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
