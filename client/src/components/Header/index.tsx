import Button from '../Button'
import Icon from '../Icon'
import SearchBar from '../SearchBar'
import Title from '../Title'
import { FlexWrapper, HeaderContainer } from './styles'
import { IHeader } from './types'

const Header = ({
  headerTitle,
  searchPlaceholder,
  searchText,
  setSearchText,
}: IHeader) => {
  return (
    <HeaderContainer>
      <Title type="primary">{headerTitle}</Title>
      <FlexWrapper>
        <SearchBar
          placeholder={searchPlaceholder}
          searchText={searchText}
          handleOnChange={(input) => setSearchText(input)}
        />
        <Button handleClick={() => console.log('TO DO')}>
          <Icon type={'download'} />
          Exportar dados
        </Button>
      </FlexWrapper>
    </HeaderContainer>
  )
}
export default Header
