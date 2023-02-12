import { useContext, useState } from 'react'
import Table from '..'
import { EntityContext } from '../../../context/CommitteeContext'
import { ActionType } from '../../../context/CommitteeContext/types'
import { committee_details_mock } from '../../../_mock/committee'
import MemberParticipations from '../../MemberParticipations'
import TableRow from './TableRow'
import { IMainTable } from './types'

const MainTable = ({ content, type, sizes, showOptions }: IMainTable) => {
  const [showDetails, setShowDetails] = useState(-1)
  const { setAction, setCurrentEntity } = useContext(EntityContext)

  const handleOptionBoxSelection = (
    selected: ActionType,
    data: {
      id: number
      content: any[]
    }
  ) => {
    if (selected === 'edit') {setCurrentEntity({
        id: data.id,
        name: data.content[0],
        content:
          type === 'committee'
            ? committee_details_mock
            : content[data.id-1].committees.active_participations,
      })
    } else {
      setCurrentEntity({ id: data.id, name: data.content[0] })
    }
    setAction(selected)
  }

  return (
    <>
      {content.map((item: any, index: number) => {
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
              content={committee_details_mock}
            />
          ) : (
            <MemberParticipations
              activeContent={content[index].committees.active_participations}
              closedContent={content[index].committees.history}
            />
          )}
        </TableRow>
      )})}
    </>
  )
}
export default MainTable
