import useComponentVisible from '../../../hooks/useComponentVisible'
import Icon from '../../Icon'
import OptionsBox from '../../OptionsBox'
import RowDetails from '../RowDetails'
import { ITableRow } from './types'
import {
  ActionsWrapper,
  RowContainer,
  Item,
  TransparentButton,
  VerticalLine,
  Container,
} from './styles'

const TableRow = ({
  type,
  data,
  sizes,
  detailsToShow,
  handleRowClick,
}: ITableRow) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  return (
    <Container>
      <RowContainer>
        {data.content.map((item: any, index: number) => (
          <Item size={sizes[index]} key={`item-${item}`}>
            {item}
          </Item>
        ))}
        <ActionsWrapper>
          <TransparentButton onClick={() => setIsComponentVisible(true)}>
            <Icon type="options" />
          </TransparentButton>
          <VerticalLine />
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
      {detailsToShow === data.id && <RowDetails />}
      {isComponentVisible && (
        <div ref={ref}>
          <OptionsBox
            type={type}
            handleSeeHistory={() => console.log('hora de ver o historico')}
            handleEdit={() => console.log('hora de editar')}
            handleDisable={() => console.log('hora de desabilitar')}
          />
        </div>
      )}
    </Container>
  )
}
export default TableRow
