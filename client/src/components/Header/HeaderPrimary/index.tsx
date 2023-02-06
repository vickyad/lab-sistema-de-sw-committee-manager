import { useState } from 'react'
import { RelativeBox } from '../../../styles/commonStyles'
import Button from '../../Button'
import ExportOptionsBox from '../../ExportOptionsBox'
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
  handleExport,
}: IHeader) => {
  const [openOptions, setOpenOptions] = useState(false)
  return (
    <HeaderContainer>
      <Title type="primary">{headerTitle}</Title>
      <FlexWrapper>
        <SearchBar
          placeholder={searchPlaceholder}
          searchText={searchText}
          handleOnChange={(input) => setSearchText(input)}
        />
        <RelativeBox>
          <Button handleClick={() => setOpenOptions(!openOptions)}>
            <Icon type={'download'} />
            Exportar dados
          </Button>
          {openOptions && (
            <ExportOptionsBox
              handleExportAsPDF={() => handleExport('pdf')}
              handleExportAsCSV={() => handleExport('csv')}
            />
          )}
        </RelativeBox>
      </FlexWrapper>
    </HeaderContainer>
  )
}
export default HeaderPrimary
