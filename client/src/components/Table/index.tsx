import DetailsTable from './DetailsTable'
import MainTable from './MainTable'
import TableHeader from './TableHeader'
import { ITable } from './types'

const Table = ({
  type,
  header,
  content,
  editMode = false,
  showOptions = true,
  updateTable,
}: ITable) => {
  return (
    <div>
      <>
        <TableHeader {...header} />
        {header.type === 'secondary' ? (
          <DetailsTable
            tableInfo={header}
            content={content}
            editMode={editMode}
            updateTable={updateTable}
            type={type}
          />
        ) : (
          <MainTable
            type={type}
            sizes={header.sizes}
            content={content}
            showOptions={showOptions}
          />
        )}
      </>
    </div>
  )
}
export default Table
