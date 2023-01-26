import useComponentVisible from '../../../../hooks/useComponentVisible'
import Icon from '../../../Icon'
import OptionsBox from '../../../OptionsBox'
import { ITableRowExpandable } from './types'
import {
  ActionsWrapper,
  RowContainer,
  Item,
  TransparentButton,
  VerticalLine,
  Container,
  InnerTableWrapper,
} from './styles'
import { useContext } from 'react'
import { EntityContext } from '../../../../context/CommitteeContext'

const TableRow = ({
  children,
  type,
  data,
  sizes,
  detailsToShowId,
  showOptions,
  handleRowClick,
}: ITableRowExpandable) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const { setAction, setCurrentEntity } = useContext(EntityContext)

  const handleOptionBoxSelection = (selected: string) => {
    setCurrentEntity({ id: data.id, name: data.content[0] })
    setAction(selected)
  }

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
              handleRowClick(detailsToShowId === data.id ? -1 : data.id)
            }
          >
            <Icon
              type="chevron"
              position={detailsToShowId === data.id ? 'top' : 'down'}
            />
          </TransparentButton>
        </ActionsWrapper>
      </RowContainer>
      {detailsToShowId === data.id && (
        <InnerTableWrapper>{children}</InnerTableWrapper>
      )}
      {isComponentVisible && (
        <div ref={ref}>
          <OptionsBox
            type={type}
            handleSeeHistory={() => handleOptionBoxSelection('history')}
            handleEdit={() => handleOptionBoxSelection('edit')}
            handleDisable={() => handleOptionBoxSelection('deactivate')}
          />
        </div>
      )}
    </Container>
  )
}
export default TableRow
