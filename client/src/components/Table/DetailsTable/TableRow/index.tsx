import { useContext } from 'react'
import { EntityContext } from '../../../../context/CommitteeContext'
import { Container, Input, Item, RowContainer } from './styles'
import { ITableRow } from './types'

const TableRow = ({ id, editMode, data, tableInfo, onChange }: ITableRow) => {
  const { headers, sizes } = tableInfo
  const { setAction, setCurrentEntity } = useContext(EntityContext)

  const handleSeeFunctionHistory = (item: any) => {
    setAction('function-history')
    setCurrentEntity({ id: data.id, name: item })
  }

  return (
    <Container>
      <RowContainer>
        {editMode
          ? data.content.map((item: any, index: number) => {
              return headers[index].editable ? (
                <Input
                  size={sizes[index]}
                  value={item}
                  onChange={(e) => onChange(e.target.value, index, id)}
                  key={`input-item-${index}`}
                />
              ) : (
                <Item size={sizes[index]} key={`item-${item}-${index}`}>
                  {item}
                </Item>
              )
            })
          : data.content.map((item: any, index: number) =>
              index === 0 ? (
                <Item
                  size={sizes[index]}
                  key={`item-${item}-${index}`}
                  onClick={() => handleSeeFunctionHistory(item)}
                >
                  {item}
                </Item>
              ) : (
                <Item size={sizes[index]} key={`item-${item}-${index}`}>
                  {item}
                </Item>
              )
            )}
      </RowContainer>
    </Container>
  )
}
export default TableRow
