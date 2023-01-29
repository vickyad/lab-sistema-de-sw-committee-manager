import { useContext, useEffect, useState } from 'react'
import Popup from '../../components/Popup'
import { EntityContext } from '../../context/CommitteeContext'
import { FontBold } from '../../styles/commonStyles'
import Edit from './Edit'
import CommitteeHistory from './CommitteeHistory'
import Visualization from './Visualization'
import FunctionHistory from './FunctionHistory'

const ComitteesView = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const {
    action,
    setAction,
    currentEntity: currentCommittee,
    setCurrentEntity: setCurrentCommittee,
  } = useContext(EntityContext)

  const closePopUp = () => {
    setDisplayPopup(false)
    setAction(null)
    setCurrentCommittee({ id: -1, name: '' })
  }

  const handleDeactivateCommittee = () => {
    // TODO: desativar membro
    closePopUp()
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
          Você tem certeza que deseja desativar{' '}
          <FontBold>{currentCommittee.name}</FontBold>? Essa ação não pode ser
          revertida
        </Popup>
      )}
      {action === 'edit' ? (
        <Edit />
      ) : action === 'history' ? (
        <CommitteeHistory />
      ) : action === 'function-history' ? (
        <FunctionHistory />
      ) : (
        <Visualization blurBg={displayPopup} />
      )}
    </>
  )
}
export default ComitteesView
