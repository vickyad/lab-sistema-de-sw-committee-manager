import { useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableRowExpandable from './TableRowExpandable'
import { ITable } from './types'

const Table = ({ type, content, headerInfo, handleSeeHistory, handleEdit, handleDisable }: ITable) => {
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
                handleSeeHistory={handleSeeHistory ? handleSeeHistory : () => console.log('not implemented')} handleEdit={handleEdit ? handleEdit : () => console.log('not implemented')} handleDisable={handleDisable ? handleDisable : () => console.log('not implemented')} />
              ))}
        </>
      )}
    </div>
  )
}
export default Table
