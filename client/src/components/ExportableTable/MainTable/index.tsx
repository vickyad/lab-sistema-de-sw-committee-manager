import ExportableTable from '..'
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
              content={item.participation_details}
            />
          ) : (
            <MemberParticipations
              activeContent={item.committees.active_participations}
              closedContent={item.committees.active_participations}
              exportMode={true}
            />
          )}
        </TableRow>
      )})}
    </>
  )
}
export default MainTable
