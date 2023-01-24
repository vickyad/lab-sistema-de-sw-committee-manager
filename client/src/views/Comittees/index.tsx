import { useContext, useEffect, useState } from 'react'
import Popup from '../../components/Popup'
import { CommitteeContext } from '../../context/CommitteeContext'
import Edit from './Edit'
import History from './History'
import Visualization from './Visualization'

const ComitteesView = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const { action, setAction, currentCommittee, setCurrentCommittee } =
    useContext(CommitteeContext)

  const handleDeactivateCommittee = () => {
    // TODO: desativar órgão
    console.log('Desativar órgão')
    setDisplayPopup(false)
    setAction(null)
    setCurrentCommittee({ id: -1, name: '' })
  }

  useEffect(() => {
    if (action === 'deactivate') {
      setDisplayPopup(true)
    }
  }, [action])

  return (
    <>
      {displayPopup && (
        <Popup
          title={'Desativar Órgão'}
          action={'Desativar Órgão'}
          actionType={'important'}
          handleActionClick={handleDeactivateCommittee}
          handleCancelClick={() => setDisplayPopup(false)}
        >
          Você tem certeza que deseja desativar {currentCommittee.name}? Essa
          ação não pode ser revertida
        </Popup>
      )}
      {action === 'edit' ? (
        <Edit />
      ) : action === 'history' ? (
        <History />
      ) : (
        <Visualization blurBg={displayPopup} />
      )}
    </>
  )
}
export default ComitteesView
