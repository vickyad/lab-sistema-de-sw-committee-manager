import { useState } from 'react'
import Table from '..'
import { committee_details_mock } from '../../../_mock/comittee'
import { member_details_mock } from '../../../_mock/members'
import MemberParticipations from '../../MemberParticipations'
import TableRow from './TableRow'
import { IMainTable } from './types'

const MainTable = ({ content, type, sizes, showOptions }: IMainTable) => {
  const [showDetails, setShowDetails] = useState(-1)
  return (
    <>
      {content.map((item: any, index: number) => (
        <TableRow
          type={type}
          data={item}
          sizes={sizes}
          detailsToShowId={showDetails}
          handleRowClick={(id: number) => setShowDetails(id)}
          showOptions={showOptions}
          key={`table-row-${index}`}
        >
          {type === 'committee' ? (
            <Table
              type={'committee-details'}
              content={committee_details_mock}
            />
          ) : (
            <MemberParticipations
              activeContent={member_details_mock.active_participations}
              closedContent={member_details_mock.history}
            />
          )}
        </TableRow>
      ))}
    </>
  )
}
export default MainTable
