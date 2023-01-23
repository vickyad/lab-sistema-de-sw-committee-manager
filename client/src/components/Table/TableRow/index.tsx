import { Container, Item, RowContainer } from './styles'
import { ITableRow } from './types'

const TableRow = ({ data, sizes }: ITableRow) => {
  return (
    <Container>
      <RowContainer>
        {data.content.map((item: any, index: number) => (
          <Item size={sizes[index]} key={`item-${item}-${index}`}>
            {item}
          </Item>
        ))}
      </RowContainer>
    </Container>
  )
}
export default TableRow
