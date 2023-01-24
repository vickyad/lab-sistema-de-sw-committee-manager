import { useState } from 'react'
import Popup from '../../components/Popup'
import History from './History'
import Visualization from './Visualization'

const ComitteesView = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const [status, setStatus] = useState('view')
  const [currentId, setCurrentId] = useState(-1)

  const handleDeactivateCommittee = () => {
    // TO-DO: desativar órgão
    console.log('Desativar órgão')
  }

  const handleOpenPopUp = (id: number) => {
    setCurrentId(id)
    setDisplayPopup(true)
  }

  return (
    <>
      {displayPopup &&
        <Popup title={'Desativar Órgão'} action={'Desativar Órgão'} actionType={'important'} handleActionClick={handleDeactivateCommittee} handleCancelClick={() => setDisplayPopup(false)}>
          Você tem certeza que deseja desativar esse órgão? Essa ação não pode ser revertida
        </Popup> 
      }
      {
        status === 'edit' ? 
          <>Editar</> 
        : status === 'history' ? 
          <History id={currentId} /> 
        : <Visualization blurBg={displayPopup} handleSeeHistory={() => setStatus('history')} handleEdit={() => setStatus('edit')} handleDisable={handleOpenPopUp} />
      }
    </>
  )
}
export default ComitteesView
