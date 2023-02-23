import ExportableTable from '..'
import MemberParticipations from '../../MemberParticipations'
import TableRow from './TableRow'
import { IMainTable } from './types'
import {
  committeeType,
  genericInstanceType,
  memberType,
} from '../../../types/contentTypes'

const MainTable = ({ content, type, sizes }: IMainTable) => {
  return (
    <>
      {content.map((item: genericInstanceType, index: number) => {
        let item_committee = item as committeeType
        let item_member = item as memberType
        ;<TableRow data={item} sizes={sizes} key={`table-row-${index}`}>
          {type === 'committee' ? (
            <ExportableTable
              type={'committee-details'}
              content={item_committee.participation_details}
            />
          ) : (
            <MemberParticipations
              active_participations={
                item_member.committees.active_participations
              }
              history={item_member.committees.history}
              exportMode={true}
            />
          )}
        </TableRow>
      })}
    </>
  )
}
export default MainTable
