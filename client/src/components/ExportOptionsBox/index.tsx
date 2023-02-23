import Button from '../Button'
import Icon from '../Icon'
import { Container } from './styles'
import { IOptionsBox } from './types'

const ExportOptionsBox = ({
  handleExportAsCSV,
  handleExportAsPDF,
}: IOptionsBox) => {
  return (
    <Container>
      <Button
        title={'exportar conteúdo da página como PDF'}
        type="transparent"
        handleClick={handleExportAsPDF}
      >
        <Icon type="pdf" /> Exportar como PDF
      </Button>
      <Button
        title={'exportar conteúdo da página como CSV'}
        type="transparent"
        handleClick={handleExportAsCSV}
      >
        <Icon type="csv" /> Exportar como CSV
      </Button>
    </Container>
  )
}
export default ExportOptionsBox
