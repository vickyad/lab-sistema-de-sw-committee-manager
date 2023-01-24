export interface IHeader {
  headerTitle: string
  searchPlaceholder: string
  searchText: string
  setSearchText: (input: string) => void
  handleClick: () => void
}
