import ExportableTable from '..'
import { committee_details_mock } from '../../../_mock/comittee'
import { member_details_mock } from '../../../_mock/members'
import MemberParticipations from '../../MemberParticipations'
import TableRow from './TableRow'
import { IMainTable } from './types'

const MainTable = ({ content, type, sizes }: IMainTable) => {
  return (
    <>
      {content.map((item: any, index: number) => (
        <TableRow data={item} sizes={sizes} key={`table-row-${index}`}>
          {type === 'committee' ? (
            <ExportableTable
              type={'committee-details'}
              content={committee_details_mock}
            />
          ) : (
            <MemberParticipations
              activeContent={member_details_mock.active_participations}
              closedContent={member_details_mock.history}
              exportMode={true}
            />
          )}
        </TableRow>
      ))}
    </>
  )
}
export default MainTable
