import { useContext, useState } from 'react'
import Button from '../../../components/Button'
import Popup from '../../../components/Popup'
import Title from '../../../components/Title'
import { EntityContext } from '../../../context/CommitteeContext'
import { MainContainer } from '../../../styles/commonStyles'
import { ButtonContainer } from './styles'

const OptionsMenu = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const { setAction } = useContext(EntityContext)

  const handleAddMember = () => {
    // TODO: desativar membro

    setDisplayPopup(false)
  }

  const handleDeactivateMember = () => {
    // TODO: desativar membro

    setDisplayPopup(false)
  }

  return (
    <>
      {displayPopup && (
        <Popup
          title={'Adicionar Funcionário'}
          action={'Adicionar Funcionário'}
          actionType={'save'}
          handleActionClick={handleAddMember}
          handleCancelClick={() => setDisplayPopup(false)}
        >
          Sou um popup!
        </Popup>
      )}
      <MainContainer displayingPopup={displayPopup}>
        <Title type="primary">Configurações de bando de dados</Title>
        <ButtonContainer>
          <Button
            handleClick={() => setAction('add-from-template')}
            fontSize="large"
          >
            Adicionar formação a partir de órgão pré-definido
          </Button>
          <Button handleClick={() => setAction('add-custom')} fontSize="large">
            Adicionar formação a partir de órgão personalizado
          </Button>
          <Button
            handleClick={() => console.log('hello darling')}
            fontSize="large"
          >
            Adicionar funcionário
          </Button>
          <Button
            handleClick={() => console.log('hello darling')}
            fontSize="large"
          >
            Desativar funcionário
          </Button>
        </ButtonContainer>
      </MainContainer>
    </>
  )
}
export default OptionsMenu
