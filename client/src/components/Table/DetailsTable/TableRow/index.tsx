import { useContext } from 'react'
import { EntityContext } from '../../../../context/CommitteeContext'
import { member_list_mock } from '../../../../_mock/memberList'
import Dropdown from '../../Input/Dropdown'
import TextInput from '../../Input/TextInput'
import { Container, Item, RowContainer } from './styles'
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
                headers[index].type === 'dropdown' ? (
                  <Dropdown
                    size={sizes[index]}
                    options={member_list_mock}
                    optionSelected={item}
                    setOptionSelected={(name: string) =>
                      onChange(name, index, id)
                    }
                  />
                ) : (
                  <TextInput
                    size={sizes[index]}
                    value={item}
                    handleOnChange={(newValue) => onChange(newValue, index, id)}
                    key={`input-item-${index}`}
                  />
                )
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
