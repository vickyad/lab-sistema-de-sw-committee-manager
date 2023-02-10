export interface IHeader {
  headerTitle: string
  searchPlaceholder: string
  searchText: string
  setSearchText: (input: string) => void
  handleExport: (type: 'csv' | 'pdf') => void
}
