import { useEffect, useState } from 'react'
import { ComitteeTable } from '../../data/comitteeTable'
import { MemberTable } from '../../data/membersTable'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const Table = ({ type, content }: { type: string; content: any }) => {
  const [tableInfo, setTableInfo] = useState<any | undefined>(undefined)
  useEffect(() => {
    let info = type === 'comittee' ? ComitteeTable : MemberTable
    setTableInfo(info)
  }, [])
  return (
    <div>
      {tableInfo && (
        <>
          <TableHeader {...tableInfo} />
          {content.map((item: any) => (
            <TableRow content={item} sizes={tableInfo.sizes} />
          ))}
        </>
      )}
    </div>
  )
}
export default Table
