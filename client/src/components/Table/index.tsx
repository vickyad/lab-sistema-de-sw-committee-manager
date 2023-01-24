import { useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableRowExpandable from './TableRowExpandable'
import { ITable } from './types'

const Table = ({ type, content, headerInfo }: ITable) => {
  const [showDetails, setShowDetails] = useState(-1)

  return (
    <div>
      {headerInfo && (
        <>
          <TableHeader {...headerInfo} />
          {type === 'details'
            ? content.map((item: any, index: number) => (
                <TableRow
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