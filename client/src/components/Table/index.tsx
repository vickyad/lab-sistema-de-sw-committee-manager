import Header from './Header'
import { ITable } from './types'
import Body from './Body'

const Table = ({
  type,
  tableInfo,
  content,
  editMode = false,
  showOptions = true,
  onUpdateTable,
}: ITable) => {
  return (
    <div>
      <>
        <Header {...tableInfo} />
        <Body
          type={type}
          content={content}
          showOptions={showOptions}
          tableInfo={tableInfo}
          editMode={editMode}
          onUpdateTable={onUpdateTable}
        />
      </>
    </div>
  )
}
export default Table
