import TableRow from './TableRow'
import { IDetailsTable } from './types'

const DetailsTable = ({ content, tableInfo }: IDetailsTable) => {
  return (
    <>
      {content.map((item: any, index: number) => (
        <TableRow
          data={item}
          tableInfo={tableInfo}
          key={`table-row-${index}`}
        />
      ))}
    </>
  )
}
export default DetailsTable
