import { useContext, useState } from 'react'
import Button from '../../../components/Button'
import Dropdown from '../../../components/Input/Dropdown'
import TextInput from '../../../components/Input/TextInput'
import Popup from '../../../components/Popup'
import Title from '../../../components/Title'
import { EntityContext } from '../../../context/CommitteeContext'
import { MainContainer } from '../../../styles/commonStyles'
import { getEmptyEntity } from '../../../utils/EmptyEntity'
import { member_list_mock } from '../../../_mock/memberList'
import { ButtonContainer } from './styles'

const OptionsMenu = () => {
  const { setAction } = useContext(EntityContext)
  const [displayPopup, setDisplayPopup] = useState<'add' | 'deactivate' | null>(
    null
  )
  const [activeMemberSelected, setActiveMemberSelected] = useState(
    getEmptyEntity()
  )
  const [memberName, setMemberName] = useState('')

  const handleAddMember = () => {
    // TODO: adicionar membro
    setDisplayPopup(null)
  }

  const handleDeactivateMember = () => {
    // TODO: desativar membro
    setDisplayPopup(null)
  }

  return (
    <>
      {displayPopup === 'add' ? (
        <Popup
          title={'Adicionar Funcionário'}
          action={'Adicionar Funcionário'}
          actionType={'save'}
          handleActionClick={handleAddMember}
          handleCancelClick={() => setDisplayPopup(null)}
        >
          <TextInput
            label="Nome"
            required
            value={memberName}
            handleChange={(member) => setMemberName(member)}
            size="lg"
          />
        </Popup>
      ) : (
        displayPopup === 'deactivate' && (
          <Popup
            title={'Desativar Funcionário'}
            action={'Desativar Funcionário'}
            actionType={'save'}
            handleActionClick={handleDeactivateMember}
            handleCancelClick={() => setDisplayPopup(null)}
          >
            <Dropdown
              placeholder={'Selecione um funcionário'}
              options={member_list_mock}
              optionSelected={activeMemberSelected}
              setOptionSelected={setActiveMemberSelected}
            />
          </Popup>
        )
      )}
      <MainContainer displayingPopup={!!displayPopup}>
        <Title type="primary">Configurações de bando de dados</Title>
        <ButtonContainer>
          <Button
            title="adicionar uma nova composição de órgão a partir de template"
            handleClick={() => setAction('add-from-template')}
            fontSize="large"
          >
            Adicionar formação a partir de órgão pré-definido
          </Button>
          <Button
            title="adicionar uma nova composição de órgão personalizado"
            handleClick={() => setAction('add-custom')}
            fontSize="large"
          >
            Adicionar formação a partir de órgão personalizado
          </Button>
          <Button
            title="adicionar novo funcionário"
            handleClick={() => setDisplayPopup('add')}
            fontSize="large"
          >
            Adicionar funcionário
          </Button>
          <Button
            title="desativar funcionário"
            handleClick={() => setDisplayPopup('deactivate')}
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
