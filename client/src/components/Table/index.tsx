import { CommitteeDetailsHeader } from '../../data/committeeDetailsHeader'
import { CommitteeTableHeader } from '../../data/committeeHeader'
import { MemberDetailsHeader } from '../../data/membersDetailsHeader'
import { MemberTableHeader } from '../../data/membersHeader'
import DetailsTable from './DetailsTable'
import MainTable from './MainTable'
import TableHeader from './TableHeader'
import { ITable } from './types'

const Table = ({
  type,
  content,
  editMode = false,
  showOptions = true,
  updateTable,
}: ITable) => {
  const getTableHeader = () => {
    switch (type) {
      case 'committee-details':
        return CommitteeDetailsHeader
      case 'members-details':
        return MemberDetailsHeader
      case 'members':
        return MemberTableHeader
      case 'committee':
      default:
        return CommitteeTableHeader
    }
  }

  const getTableSizes = () => {
    return getTableHeader().sizes
  }

  return (
    <div>
      <>
        <TableHeader {...getTableHeader()} />
        {type === 'committee-details' || type === 'members-details' ? (
          <DetailsTable
            tableInfo={getTableHeader()}
            content={content}
            editMode={editMode}
            updateTable={updateTable}
            type={type}
          />
        ) : (
          <MainTable
            type={type}
            sizes={getTableSizes()}
            content={content}
            showOptions={showOptions}
          />
        )}
      </>
    </div>
  )
}
export default Table
