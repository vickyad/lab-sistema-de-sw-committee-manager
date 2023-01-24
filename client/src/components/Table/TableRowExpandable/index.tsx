import useComponentVisible from '../../../hooks/useComponentVisible'
import Icon from '../../Icon'
import OptionsBox from '../../OptionsBox'
import { ITableRow } from './types'
import {
  ActionsWrapper,
  RowContainer,
  Item,
  TransparentButton,
  VerticalLine,
  Container,
  InnerTableWrapper,
} from './styles'
import Table from '..'
import { details_mock } from '../../../_mock/comittee'
import { ComitteeDetailsTable } from '../../../data/comitteeDetailsHeader'
import { useContext } from 'react'
import { CommitteeContext } from '../../../context/CommitteeContext'

const TableRowExpandable = ({
  type,
  data,
  sizes,
  detailsToShow,
  showOptions,
  handleRowClick,
}: ITableRow) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const { setAction, setCurrentCommittee } = useContext(CommitteeContext)

  return (
    <Container>
      <RowContainer>
        {data.content.map((item: any, index: number) => (
          <Item size={sizes[index]} key={`expandable-item-${item}-${index}`}>
            {item}
          </Item>
        ))}
        <ActionsWrapper>
          {showOptions && (
            <>
              <TransparentButton onClick={() => setIsComponentVisible(true)}>
                <Icon type="options" />
              </TransparentButton>
              <VerticalLine />
            </>
          )}
          <TransparentButton
            onClick={() =>
              handleRowClick(detailsToShow === data.id ? -1 : data.id)
            }
          >
            <Icon
              type="chevron"
              position={detailsToShow === data.id ? 'top' : 'down'}
            />
          </TransparentButton>
        </ActionsWrapper>
      </RowContainer>
      {detailsToShow === data.id && (
        <InnerTableWrapper>
          <Table
            type={'details'}
            content={details_mock}
            headerInfo={ComitteeDetailsTable}
          />
        </InnerTableWrapper>
      )}
      {isComponentVisible && (
        <div ref={ref}>
          <OptionsBox
            type={type}
            handleSeeHistory={() => {
              setCurrentCommittee({ id: data.id, name: data.content[0] })
              setAction('history')
            }}
            handleEdit={() => {
              setCurrentCommittee({ id: data.id, name: data.content[0] })
              setAction('edit')
            }}
            handleDisable={() => {
              setCurrentCommittee({ id: data.id, name: data.content[0] })
              setAction('deactivate')
            }}
          />
        </div>
      )}
    </Container>
  )
}
export default TableRowExpandable
