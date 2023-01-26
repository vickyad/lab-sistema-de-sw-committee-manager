import { Container, Input, Item, RowContainer } from './styles'
import { ITableRow } from './types'

const TableRow = ({ id, editMode, data, sizes, onChange }: ITableRow) => {
  return (
    <Container>
      <RowContainer>
        {editMode
          ? data.content.map((item: any, index: number) => (
              <Input
                size={sizes[index]}
                value={item}
                onChange={(e) => onChange(e.target.value, index, id)}
                key={`input-item-${index}`}
              ></Input>
            ))
          : data.content.map((item: any, index: number) => (
              <Item size={sizes[index]} key={`item-${item}-${index}`}>
                {item}
              </Item>
            ))}
      </RowContainer>
    </Container>
  )
}
export default TableRow
