import { useContext, useEffect, useState } from 'react'
import Popup from '../../components/Popup'
import { EntityContext } from '../../context/CommitteeContext'
import { FontBold } from '../../styles/commonStyles'
import Edit from './Edit'
import Visualization from './Visualization'

const MembersView = () => {
  const [displayPopup, setDisplayPopup] = useState(false)
  const {
    action,
    setAction,
    currentEntity: currentMember,
    setCurrentEntity: setCurrentMember,
  } = useContext(EntityContext)

  const closePopUp = () => {
    // TODO: desativar membro
    console.log('nhoi')
    setDisplayPopup(false)
    setAction(null)
    setCurrentMember({ id: -1, name: '', content: undefined })
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
          title={'Desativar Membro'}
          action={'Desativar Membro'}
          actionType={'important'}
          handleActionClick={handleDeactivateCommittee}
          handleCancelClick={closePopUp}
        >
          Você tem certeza que deseja desativar{' '}
          <FontBold>{currentMember.name}</FontBold>? Essa ação não pode ser
          revertida
        </Popup>
      )}
      {action === 'edit' ? <Edit /> : <Visualization blurBg={displayPopup} />}
    </>
  )
}
export default MembersView
