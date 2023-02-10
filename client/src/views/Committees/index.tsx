import { useContext } from 'react'
import { EntityContext } from '../../context/CommitteeContext'
import Edit from './Edit'
import CommitteeHistory from './CommitteeHistory'
import Visualization from './Visualization'
import FunctionHistory from './FunctionHistory'

const ComitteesView = () => {
  const { action } = useContext(EntityContext)

  return (
    <>
      {action === 'edit' ? (
        <Edit />
      ) : action === 'history' ? (
        <CommitteeHistory />
      ) : action === 'function-history' ? (
        <FunctionHistory />
      ) : (
        <Visualization />
      )}
    </>
  )
}
export default ComitteesView
