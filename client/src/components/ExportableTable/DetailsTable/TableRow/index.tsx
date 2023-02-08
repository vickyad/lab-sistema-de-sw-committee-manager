import { useContext } from 'react'
import { EntityContext } from '../../../../context/CommitteeContext'
import { Container, Item, RowContainer } from './styles'
import { ITableRow } from './types'

const TableRow = ({ data, tableInfo }: ITableRow) => {
  const { sizes } = tableInfo
  const { setAction, setCurrentEntity } = useContext(EntityContext)

  const handleSeeFunctionHistory = (item: any) => {
    setAction('function-history')
    setCurrentEntity({ id: data.id, name: item })
  }

  return (
    <Container>
      <RowContainer>
        {data.content.map((item: any, index: number) =>
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
