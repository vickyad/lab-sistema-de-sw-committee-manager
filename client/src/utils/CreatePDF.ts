import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const createPDF = async (
  table: React.RefObject<HTMLInputElement>,
  filename: string
) => {
  if (table.current !== null) {
    html2canvas(table.current, {
      width: 2480,
      height: 3508,
    }).then((canvas) => {
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: 'a4',
      })
      const imgData = canvas.toDataURL('image/png')
      const imgProperties = pdf.getImageProperties(imgData)

      let pdfWidth = pdf.internal.pageSize.getWidth()
      let pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width
      let componentHeight = ((canvas.height * pdfWidth) / 2454) * 1.24
      var heightLeft = componentHeight

      let position = 0
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, componentHeight)
      heightLeft -= pdfHeight

      while (heightLeft >= 0) {
        position = heightLeft - componentHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, componentHeight)
        heightLeft -= pdfHeight
      }
      pdf.save(`${filename}.pdf`)
    })
  }
}
