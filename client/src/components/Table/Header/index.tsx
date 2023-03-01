import { ColumnHeader, Container } from './styles'
import { ITableHeader } from './type'

const Header = ({ headers, sizes, type }: ITableHeader) => {
  return (
    <Container type={type}>
      {headers.map((item, index) => (
        <ColumnHeader size={sizes[index]} key={`column-${item}-${index}`}>
          {item.label}
        </ColumnHeader>
      ))}
    </Container>
  )
}
export default Header
