import { useContext } from 'react'
import { EntityContext } from '../../context/CommitteeContext'
import Edit from './Edit'
import Visualization from './Visualization'

const MembersView = () => {
  const { action } = useContext(EntityContext)

  return <>{action === 'edit' ? <Edit /> : <Visualization />}</>
}
export default MembersView
