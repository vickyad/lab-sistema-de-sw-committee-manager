import { useContext, useState } from 'react'
import Button from '../../../components/Button'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import Icon from '../../../components/Icon'
import Checkbox from '../../../components/Input/Checkbox'
import TextInput from '../../../components/Input/TextInput'
import Title from '../../../components/Title'
import { EntityContext } from '../../../context/CommitteeContext'
import { FlexContainer, FieldsContainer, InfoContainer } from './styles'

const CommitteeCustom = () => {
  const { setAction } = useContext(EntityContext)
  const [createTemplate, setCreateTemplate] = useState(false)
  const [committeeInfo, setCommitteeInfo] = useState({
    name: '',
    bond: '',
    ordinance: '',
    term: '',
    beginDate: '',
    endDate: '',
    notes: '',
  })

  return (
    <div>
      <HeaderSecondary
        headerTitle="ADICIONAR FORMAÇÃO PERSONALIZADA"
        buttonType="save"
        backButtonMsg="voltar às configurações de banco de dados"
      />
      <FlexContainer>
        <TextInput
          label="Órgão"
          required
          value={committeeInfo.name}
          handleChange={(newValue: string) =>
            setCommitteeInfo({ ...committeeInfo, name: newValue })
          }
          size="lg"
        />
        <TextInput
          label="Vínculo"
          value={committeeInfo.bond}
          handleChange={(newValue: string) =>
            setCommitteeInfo({ ...committeeInfo, bond: newValue })
          }
          size="lg"
        />
      </FlexContainer>
      <Title type="subsection">Preencha os campos</Title>
      <InfoContainer>
        <FieldsContainer>
          <TextInput
            label="Portaria"
            value={committeeInfo.ordinance}
            handleChange={(newValue: string) =>
              setCommitteeInfo({ ...committeeInfo, ordinance: newValue })
            }
          />
          <TextInput
            label="Mandato"
            value={committeeInfo.term}
            handleChange={(newValue: string) =>
              setCommitteeInfo({ ...committeeInfo, term: newValue })
            }
          />
          <TextInput
            type="date"
            label="Data de início"
            value={committeeInfo.beginDate}
            handleChange={(newValue: string) =>
              setCommitteeInfo({ ...committeeInfo, beginDate: newValue })
            }
          />
          <TextInput
            type="date"
            label="Data de fim"
            value={committeeInfo.endDate}
            handleChange={(newValue: string) =>
              setCommitteeInfo({ ...committeeInfo, endDate: newValue })
            }
          />
          <TextInput
            label="Notas"
            value={committeeInfo.notes}
            handleChange={(newValue: string) =>
              setCommitteeInfo({ ...committeeInfo, notes: newValue })
            }
          />
        </FieldsContainer>
        <div>Tabela de membros</div>
      </InfoContainer>
      <Checkbox
        label="Criar template para esse órgão"
        checked={createTemplate}
        handleClick={() => setCreateTemplate(!createTemplate)}
      />
      <FlexContainer>
        <Button
          title="cancelar alterações"
          handleClick={() => setAction(null)}
          type="primary"
        >
          <Icon type="cancel" />
          Cancelar
        </Button>
        <Button
          title="salvar alterações"
          handleClick={() => {
            /* TODO: handle save committee */
          }}
          type="save"
        >
          <Icon type="save" />
          Salvar alterações
        </Button>
      </FlexContainer>
    </div>
  )
}
export default CommitteeCustom
