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
import { TableTypesBase } from '../../../types/tableTypes'
import MemberParticipations from '../../MemberParticipations'
import DetailsRow from './DetailsRow'
import MainRow from './MainRow'
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

  return (
    <>
      {tableInfo.type === 'secondary' ? (
        <>
          {content.map((item: any, index: number) => (
            <DetailsRow
              id={item.id}
              editMode={editMode}
              onChange={(updatedInfo, index, id) =>
                handleChange(updatedInfo, index, id)
              }
              data={item}
              tableInfo={tableInfo}
              key={`table-row-${index}`}
              type={type}
            />
          ))}
        </>
      ) : (
        <>
          {content.map((item: genericInstanceType, index: number) => {
            let item_committee = item as committeeType
            let item_member = item as memberType
            return (
              <MainRow
                type={type as TableTypesBase}
                data={item}
                sizes={tableInfo.sizes}
                detailsToShowId={showDetails}
                handleRowClick={(id: number) => setShowDetails(id)}
                showOptions={showOptions}
                key={`table-row-${index}`}
                handleOptionBoxSelection={handleOptionBoxSelection}
              >
                {type === 'committee' ? (
                  <Table
                    tableInfo={CommitteeDetailsHeader}
                    type={'committee-details'}
                    content={item_committee.participation_details}
                  />
                ) : (
                  <MemberParticipations
                    activeContent={item_member.committees.active_participations}
                    closedContent={item_member.committees.history}
                  />
                )}
              </MainRow>
            )
          })}
        </>
      )}
    </>
  )
}
export default Body
