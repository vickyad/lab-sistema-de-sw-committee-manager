import { useState } from 'react'
import Button from '../../components/Button'
import Popup from '../../components/Popup'
import SearchBar from '../../components/SearchBar'
import Table from '../../components/Table'
import Title from '../../components/Title'
import { comittee_mock } from '../../_mock/comittee'
import { member_mock } from '../../_mock/members'

const ComitteesView = () => {
  const [searchtext, setSearchText] = useState('')
  return (
    <div>
      <p>Sou o comittees</p>
      <Title type="primary">Titulo primário</Title>
      <Title type="secondary">Titulo secundário</Title>

      <Button handleClick={() => console.log('botão default')}>
        Botão primario/default
      </Button>
      <Button handleClick={() => console.log('botão default')} type="secondary">
        Botão secundario
      </Button>
      <Button handleClick={() => console.log('botão save')} type="save">
        Botão save
      </Button>
      <Button
        handleClick={() => console.log('botão attention')}
        type="attention"
      >
        Botão attention
      </Button>
      <Button handleClick={() => console.log('botão card')} type="card">
        Botão card
      </Button>
      <Button
        handleClick={() => console.log('botão transparente')}
        type="transparent"
        color="blue"
      >
        Botão transparente
      </Button>

      <SearchBar
        placeholder="Pesquise por órgão..."
        searchText={searchtext}
        handleOnChange={(input) => setSearchText(input)}
      />

      <Table type={'comittee'} content={comittee_mock} />
      <Table type={'members'} content={member_mock} />

      <Popup
        title={'Header'}
        action={'Ação'}
        actionType="save"
        handleActionClick={function (): void {
          throw new Error('Function not implemented.')
        }}
        handleCancelClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      >
        Descrição descrição
      </Popup>

      <Popup
        title={'Header'}
        action={'Ação'}
        actionType="important"
        handleActionClick={function (): void {
          throw new Error('Function not implemented.')
        }}
        handleCancelClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      >
        Descrição Descrição
      </Popup>
    </div>
  )
}
export default ComitteesView
