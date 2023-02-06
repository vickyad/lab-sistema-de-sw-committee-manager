import { ITableRowExpandable } from './types'
import { RowContainer, Item, Container, InnerTableWrapper } from './styles'

const TableRow = ({ children, data, sizes }: ITableRowExpandable) => {
  return (
    <Container>
      <RowContainer>
        {data.content.map((item: any, index: number) => (
          <Item size={sizes[index]} key={`expandable-item-${item}-${index}`}>
            {item}
          </Item>
        ))}
      </RowContainer>
      <InnerTableWrapper>{children}</InnerTableWrapper>
    </Container>
  )
}
export default TableRow
