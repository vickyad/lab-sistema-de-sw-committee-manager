import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const createPDF = async (
  table: React.RefObject<HTMLInputElement>,
  filename: string
) => {
  const pdf = new jsPDF('portrait', 'pt', 'a4')

  if (table.current !== null) {
    const data = await html2canvas(table.current)
    const img = data.toDataURL('image/png')
    const imgProperties = pdf.getImageProperties(img)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${filename}.pdf`)
  }
}

export const getPDF = async (
  table: React.RefObject<HTMLInputElement>,
  filename: string
) => {
  if (table.current !== null) {
    html2canvas(table.current, {
      width: 2480,
      height: 3508,
    }).then((canvas) => {
      let imgWidth = 1000
      let pageHeight = 1160
      let imgHeight = ((canvas.height * imgWidth) / 2454) * 1.24
      var heightLeft = imgHeight

      const imgData = canvas.toDataURL('image/png')

      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: [imgWidth, pageHeight],
      })

      let position = 0
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }
      pdf.save(`${filename}.pdf`)
    })
  }
}
