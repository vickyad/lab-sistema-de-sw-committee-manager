import { useState } from 'react'
import Button from '../../components/Button'
import SearchBar from '../../components/SearchBar'
import Table from '../../components/Table'
import Title from '../../components/Title'

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
      >
        Botão transparente
      </Button>

      <SearchBar
        placeholder="Pesquise por órgão..."
        searchText={searchtext}
        handleOnChange={(input) => setSearchText(input)}
      />

      <Table />
    </div>
  )
}
export default ComitteesView
