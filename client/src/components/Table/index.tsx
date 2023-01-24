import { useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableRowExpandable from './TableRowExpandable'
import { ITable } from './types'

const Table = ({
  type,
  content,
  editMode = false,
  headerInfo,
  updateTable,
}: ITable) => {
  const [showDetails, setShowDetails] = useState(-1)

  const handleChange = (updatedInfo: any, index: number, id: number) => {
    let newTable = [...content]
    newTable = newTable.map((item) => {
      if (item.id === id) {
        let content = [...item.content]
        content[index] = updatedInfo
        return { id: item.id, content: [...content] }
      }
      return item
    })
    updateTable && updateTable(newTable)
  }

  return (
    <div>
      {headerInfo && (
        <>
          <TableHeader {...headerInfo} />
          {type === 'details'
            ? content.map((item: any, index: number) => (
                <TableRow
                  id={item.id}
                  editMode={editMode}
                  onChange={(updatedInfo, index, id) =>
                    handleChange(updatedInfo, index, id)
                  }
                  data={item}
                  sizes={headerInfo.sizes}
                  key={`table-row-${index}`}
                />
              ))
            : content.map((item: any, index: number) => (
                <TableRowExpandable
                  type={type}
                  data={item}
                  sizes={headerInfo.sizes}
                  detailsToShow={showDetails}
                  handleRowClick={(id: number) => setShowDetails(id)}
                  key={`table-row-${index}`}
                />
              ))}
        </>
      )}
    </div>
  )
}
export default Table
