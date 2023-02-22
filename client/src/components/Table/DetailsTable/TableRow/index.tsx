import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Paths from '../../../../constants/Paths'
import { EntityContext } from '../../../../context/CommitteeContext'
import { memberGetOptionsEntry } from '../../../../types/requestAnswerTypes'
import { TableTypesExtended } from '../../../../types/tableTypes'
import RequestManager from '../../../../utils/RequestManager'
import { member_list_mock } from '../../../../_mock/memberList'
import Dropdown from '../../Input/Dropdown'
import TextInput from '../../Input/TextInput'
import { ClickableItem, Container, Item, RowContainer } from './styles'
import { ITableRow } from './types'

const TableRow = ({
  id,
  editMode,
  data,
  tableInfo,
  type,
  onChange,
}: ITableRow) => {
  const navigate = useNavigate()
  const { headers, sizes } = tableInfo
  const { setAction, setCurrentEntity } = useContext(EntityContext)
  const [optionsList, setOptionsList] = useState([] as memberGetOptionsEntry[])

  const update_options = async() => {
    let options_answer = await RequestManager.getMemberList()
    setOptionsList(options_answer)
  }

  update_options()

  const handleSeeFunctionHistory = (item: any) => {
    setAction('function-history')
    setCurrentEntity({ id: data.id, name: item })
  }

  const handleSeeCommittee = (item: any) => {
    setAction('search')
    setCurrentEntity({ id: data.id, name: item })
    navigate(Paths.COMMITTEE)
  }

  const handleClick = (type: TableTypesExtended, item: any) => {
    type === 'committee-details'
      ? handleSeeFunctionHistory(item)
      : handleSeeCommittee(item)
  }

  const handleSeeMember = (item: any) => {
    setAction('search')
    setCurrentEntity({ id: data.id, name: item })
    navigate(Paths.MEMBERS)
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
                    options={optionsList}
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
                <ClickableItem
                  title={
                    type === 'committee-details'
                      ? `visualizar histórico do cargo ${item}`
                      : `visualizar a comissão ${item}`
                  }
                  size={sizes[index]}
                  key={`item-${item}-${index}`}
                  onClick={() => handleClick(type, item)}
                >
                  {item}
                </ClickableItem>
              ) : index === 1 && type === 'committee-details' ? (
                <ClickableItem
                  title={`visualizar o membro ${item}`}
                  size={sizes[index]}
                  key={`item-${item}-${index}`}
                  onClick={() => handleSeeMember(item)}
                >
                  {item}
                </ClickableItem>
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
