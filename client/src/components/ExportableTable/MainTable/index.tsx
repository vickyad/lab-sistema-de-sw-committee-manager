import ExportableTable from '..'
import { committee_details_mock } from '../../../_mock/committee'
import MemberParticipations from '../../MemberParticipations'
import TableRow from './TableRow'
import { IMainTable } from './types'

const MainTable = ({ content, type, sizes }: IMainTable) => {
  return (
    <>
      {content.map((item: any, index: number) => {
        (
        <TableRow data={item} sizes={sizes} key={`table-row-${index}`}>
          {type === 'committee' ? (
            <ExportableTable
              type={'committee-details'}
              content={committee_details_mock}
            />
          ) : (
            <MemberParticipations
              activeContent={content[index].committees.active_participations}
              closedContent={content[index].committees.active_participations}
              exportMode={true}
            />
          )}
        </TableRow>
      )})}
    </>
  )
}
export default MainTable
