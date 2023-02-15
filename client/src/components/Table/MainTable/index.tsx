import { useContext, useState } from 'react'
import Table from '..'
import { EntityContext } from '../../../context/CommitteeContext'
import { ActionType } from '../../../context/CommitteeContext/types'
import { genericInstanceType } from '../../../types/contentTypes'
import MemberParticipations from '../../MemberParticipations'
import TableRow from './TableRow'
import { IMainTable } from './types'

const MainTable = ({ content, type, sizes, showOptions }: IMainTable) => {
  const [showDetails, setShowDetails] = useState(-1)
  const { setAction, setCurrentEntity } = useContext(EntityContext)

  const handleOptionBoxSelection = (
    selected: ActionType,
    data: genericInstanceType
  ) => {
    if (selected === 'edit') {setCurrentEntity({
        id: data.id,
        name: data.content[0],
        content:
          type === 'committee'
            ? data.participation_details
            : data.committees.active_participations,
      })
    } else {
      setCurrentEntity({ id: data.id, name: data.content[0] })
    }
    setAction(selected)
  }

  return (
    <>
      {content.map((item: genericInstanceType, index: number) => {
      return (
        <TableRow
          type={type}
          data={item}
          sizes={sizes}
          detailsToShowId={showDetails}
          handleRowClick={(id: number) => setShowDetails(id)}
          showOptions={showOptions}
          key={`table-row-${index}`}
          handleOptionBoxSelection={handleOptionBoxSelection}
        >
          {type === 'committee' ? (
            <Table
              type={'committee-details'}
              content={item.participation_details}
            />
          ) : (
            <MemberParticipations
              activeContent={item.committees.active_participations}
              closedContent={item.committees.history}
            />
          )}
        </TableRow>
      )})}
    </>
  )
}
export default MainTable
