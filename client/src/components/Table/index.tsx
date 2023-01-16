import { useEffect, useState } from 'react'
import { ComitteeTable } from '../../data/comitteeTable'
import { MemberTable } from '../../data/membersTable'
import TableHeader from './TableHeader'
import { ITableHeader } from './TableHeader/type'
import TableRow from './TableRow'
import { ITable } from './types'

const Table = ({ type, content }: ITable) => {
  const [showDetails, setShowDetails] = useState(-1)
  const [tableInfo, setTableInfo] = useState<ITableHeader | undefined>(
    undefined
  )
  useEffect(() => {
    let info = type === 'comittee' ? ComitteeTable : MemberTable
    setTableInfo(info)
  }, [])
  return (
    <div>
      {tableInfo && (
        <>
          <TableHeader {...tableInfo} />
          {content.map((item: any, index: number) => (
            <TableRow
              type={type}
              data={item}
              sizes={tableInfo.sizes}
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
