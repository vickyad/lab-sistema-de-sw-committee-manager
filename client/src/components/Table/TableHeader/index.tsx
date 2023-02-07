import { ColumnHeader, Container } from './styles'
import { ITableHeader } from './type'

const TableHeader = ({ headers, sizes, type }: ITableHeader) => {
  return (
    <Container type={type}>
      {headers.map((item, index) => (
        <ColumnHeader size={sizes[index]} key={`column-${item}`}>
          {item.label}
        </ColumnHeader>
      ))}
    </Container>
  )
}
export default TableHeader
