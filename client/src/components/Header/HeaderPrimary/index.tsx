import Button from '../../Button'
import Icon from '../../Icon'
import SearchBar from '../../SearchBar'
import Title from '../../Title'
import { FlexWrapper, HeaderContainer } from './styles'
import { IHeader } from './types'

const HeaderPrimary = ({
  headerTitle,
  searchPlaceholder,
  searchText,
  setSearchText,
  handleClick,
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
        <Button handleClick={handleClick}>
          <Icon type={'download'} />
          Exportar dados
        </Button>
      </FlexWrapper>
    </HeaderContainer>
  )
}
export default HeaderPrimary
