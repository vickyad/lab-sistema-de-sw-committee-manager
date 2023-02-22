import useComponentVisible from '../../../../hooks/useComponentVisible'
import Icon from '../../../Icon'
import EditOptionsBox from '../../../EditOptionsBox'
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

const MainRow = ({
  children,
  type,
  data,
  sizes,
  detailsToShowId,
  showOptions,
  handleRowClick,
  handleOptionBoxSelection,
}: ITableRowExpandable) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

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
          <EditOptionsBox
            type={type}
            handleSeeHistory={() => handleOptionBoxSelection('history', data)}
            handleEdit={() => handleOptionBoxSelection('edit', data)}
            handleDisable={() => handleOptionBoxSelection('deactivate', data)}
          />
        </div>
      )}
    </Container>
  )
}
export default MainRow
