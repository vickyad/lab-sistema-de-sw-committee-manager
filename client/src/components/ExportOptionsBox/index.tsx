import Icon from '../Icon'
import { Container, TransparentButton } from './styles'
import { IOptionsBox } from './types'

const ExportOptionsBox = ({
  handleExportAsCSV,
  handleExportAsPDF,
}: IOptionsBox) => {
  return (
    <Container>
      <TransparentButton onClick={handleExportAsPDF}>
        <Icon type="pdf" /> Exportar como PDF
      </TransparentButton>
      <TransparentButton onClick={handleExportAsCSV}>
        <Icon type="csv" /> Exportar como CSV
      </TransparentButton>
    </Container>
  )
}
export default ExportOptionsBox
