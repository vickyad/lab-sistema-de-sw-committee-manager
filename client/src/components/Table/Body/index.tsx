import { useState, useContext } from 'react'
import Table from '..'
import { EntityContext } from '../../../context/CommitteeContext'
import { ActionType } from '../../../context/CommitteeContext/types'
import { CommitteeDetailsHeader } from '../../../data/committeeDetailsHeader'
import {
  genericInstanceType,
  committeeType,
  memberType,
} from '../../../types/contentTypes'
import MemberParticipations from '../../MemberParticipations'
import Row from './Row'
import { IBody } from './types'

const Body = ({
  content,
  type,
  showOptions,
  editMode,
  tableInfo,
  onUpdateTable,
}: IBody) => {
  const [showDetails, setShowDetails] = useState(-1)
  const { setAction, setCurrentEntity } = useContext(EntityContext)

  const handleOptionBoxSelection = (
    selected: ActionType,
    data: genericInstanceType
  ) => {
    let data_committee = data as committeeType
    let data_member = data as memberType
    if (selected === 'edit') {
      setCurrentEntity({
        id: data.id,
        name: data.content[0],
        content:
          type === 'committee'
            ? data_committee.participation_details
            : data_member.committees.active_participations,
      })
    } else {
      setCurrentEntity({ id: data.id, name: data.content[0] })
    }
    setAction(selected)
  }

  const handleChange = (updatedInfo: any, index: number, id: number) => {
    let newTable = [...content]
    newTable = newTable.map((item) => {
      if (item.id === id) {
        let content = [...item.content]
        content[index] = updatedInfo
        return { id: item.id, content: [...content] }
      }
      return item
    })
    onUpdateTable && onUpdateTable(newTable)
  }

  const getRowChild = (item: genericInstanceType) => {
    if (tableInfo.type === 'secondary') {
      return <></>
    }
    if (type === 'committee') {
      let item_committee = item as committeeType
      return (
        <Table
          tableInfo={CommitteeDetailsHeader}
          type={'committee-details'}
          content={item_committee.participation_details}
        />
      )
    }
    let item_member = item as memberType
    return <MemberParticipations {...item_member.committees} />
  }

  return (
    <>
      {content.map((item: genericInstanceType, index: number) => {
        return (
          <Row
            key={`table-row-${index}`}
            id={item.id}
            tableType={type}
            tableInfo={tableInfo}
            data={item}
            editMode={editMode}
            showOptions={showOptions}
            detailsToShowId={showDetails}
            handleRowClick={(id: number) => setShowDetails(id)}
            handleOptionBoxSelection={handleOptionBoxSelection}
            onChange={(updatedInfo, index, id) =>
              handleChange(updatedInfo, index, id)
            }
          >
            {getRowChild(item)}
          </Row>
        )
      })}
    </>
  )
}
export default Body
