import { ColumnHeader, Container } from './styles'
import { ITableHeader } from './type'

const TableHeader = ({ headers, sizes }: ITableHeader) => {
  return (
    <Container>
      {headers.map((item, index) => (
        <ColumnHeader size={sizes[index]} key={`column-${item}`}>
          {item}
        </ColumnHeader>
      ))}
    </Container>
  )
}
export default TableHeader
