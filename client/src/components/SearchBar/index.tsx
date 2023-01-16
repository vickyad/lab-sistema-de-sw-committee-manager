import Icon from '../Icon'
import { ISearchBar } from './types'
import { Container, Input } from './styles'

const SearchBar = ({ placeholder, searchText, handleOnChange }: ISearchBar) => {
  return (
    <Container>
      <Icon type="search" />
      <Input
        placeholder={placeholder}
        value={searchText}
        onChange={(event) => handleOnChange(event.target.value)}
      />
    </Container>
  )
}
export default SearchBar
