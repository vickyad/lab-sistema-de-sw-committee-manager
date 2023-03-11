import useComponentVisible from '../../../../hooks/useComponentVisible'
import { useNavigate } from 'react-router-dom'
import Icon from '../../../Icon'
import EditOptionsBox from '../../../EditOptionsBox'
import { ITableRowExpandable } from './types'
import {
  ActionsWrapper,
  RowContainer,
  RowItem,
  VerticalLine,
  Container,
  InnerTableWrapper,
  ClickableItem,
} from './styles'
import Dropdown from '../../Input/Dropdown'
import TextInput from '../../Input/TextInput'
import { member_list_mock } from '../../../../_mock/memberList'
import { useContext, useState } from 'react'
import { EntityContext } from '../../../../context/CommitteeContext'
import Paths from '../../../../constants/Paths'
import {
  TableTypesBase,
  TableTypesExtended,
} from '../../../../types/tableTypes'
import Button from '../../../Button'
import RequestManager from '../../../../utils/RequestManager'
import { memberGetOptionsEntry } from '../../../../types/requestAnswerTypes'

const Row = ({
  children,
  id,
  tableType,
  tableInfo,
  data,
  editMode = false,
  showOptions,
  detailsToShowId,
  handleRowClick,
  handleOptionBoxSelection,
  onChange,
}: ITableRowExpandable) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const navigate = useNavigate()
  const { setAction, setCurrentEntity } = useContext(EntityContext)
  const { headers, sizes, type } = tableInfo
  const [optionsList, setOptionsList] = useState([] as memberGetOptionsEntry[])

  const update_options = async() => {
    let options_answer = await RequestManager.getMemberList()

    if(JSON.stringify(options_answer) !== JSON.stringify(optionsList)) {
      setOptionsList(options_answer)
    }
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

  const handleClick = (type: TableTypesExtended, item: any, index: number) => {
    if (index === 1) {
      return handleSeeMember(item)
    }
    if (type === 'committee-details') {
      return handleSeeFunctionHistory(item)
    }
    return handleSeeCommittee(item)
  }

  const handleSeeMember = (item: any) => {
    setAction('search')
    setCurrentEntity({ id: data.id, name: item })
    navigate(Paths.MEMBERS)
  }

  const getRowContent = (label: string | number, index: number) => {
    let columnInfo = headers[index]
    if (editMode && columnInfo.editable) {
      switch (columnInfo.type) {
        case 'text':
          return (
            <TextInput
              size={sizes[index]}
              value={label as string}
              handleOnChange={(newValue) => onChange(newValue, index, id)}
              key={`input-item-${index}`}
            />
          )
        case 'dropdown':
          return (
            <Dropdown
              size={sizes[index]}
              options={optionsList}
              optionSelected={label as string}
              setOptionSelected={(name: string) => onChange(name, index, id)}
            />
          )
        default:
          return <></>
      }
    }
    if (
      type === 'secondary' &&
      (index === 0 || (index === 1 && tableType === 'committee-details'))
    ) {
      return (
        <ClickableItem
          title={
            tableType === 'committee-details'
              ? `visualizar histórico do cargo ${label}`
              : `visualizar a comissão ${label}`
          }
          size={sizes[index]}
          key={`item-${label}-${index}`}
          onClick={() => handleClick(tableType, label, index)}
        >
          {label}
        </ClickableItem>
      )
    }
    return (
      <RowItem size={sizes[index]} key={`table-row-item-${label}-${index}`}>
        {label}
      </RowItem>
    )
  }

  return (
    <Container rowType={type}>
      <RowContainer rowType={type}>
        {data.content.map((label, index) => getRowContent(label, index))}
        {type === 'primary' && (
          <ActionsWrapper>
            {showOptions && (
              <>
                <Button
                  title="mostrar opções de ação"
                  type="transparent"
                  color="#00000078"
                  handleClick={() => setIsComponentVisible(true)}
                >
                  <Icon type="options" />
                </Button>
                <VerticalLine />
              </>
            )}
            <Button
              title="expandir linha"
              type="transparent"
              color="#00000078"
              svgStroke
              handleClick={() =>
                handleRowClick(detailsToShowId === data.id ? -1 : data.id)
              }
            >
              <Icon
                type="chevron"
                position={detailsToShowId === data.id ? 'top' : 'down'}
              />
            </Button>
          </ActionsWrapper>
        )}
      </RowContainer>
      {detailsToShowId === data.id && (
        <InnerTableWrapper>{children}</InnerTableWrapper>
      )}
      {isComponentVisible && (
        <div ref={ref}>
          <EditOptionsBox
            type={tableType as TableTypesBase}
            handleSeeHistory={() => handleOptionBoxSelection('history', data)}
            handleEdit={() => handleOptionBoxSelection('edit', data)}
            handleDisable={() => handleOptionBoxSelection('deactivate', data)}
          />
        </div>
      )}
    </Container>
  )
}
export default Row
