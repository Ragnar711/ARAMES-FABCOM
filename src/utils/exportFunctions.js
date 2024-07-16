import jsPDF from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'

import { utils, writeFile } from 'xlsx'

const SHEET_NAME = 'Sheet1'
const PDF_ORIENTATION = 'l'
const PDF_UNIT = 'mm'
const PDF_FORMAT = 'a4'
const IMAGE_FORMAT = 'image/jpeg'
const PDF_IMAGE_FORMAT = 'JPEG'

/**
 * Exports the provided data to a CSV file.
 * @param {Array} data - The data to export.
 * @param {string} tableTitle - The title of the table.
 */
export const exportToCSV = (data, tableTitle) => {
    const worksheet = utils.json_to_sheet(data)
    const workbook = utils.book_new()
    utils.book_append_sheet(workbook, worksheet, SHEET_NAME)
    writeFile(workbook, `${tableTitle}.xlsx`)
}

/**
 * Downloads the content of the div with the provided ID as a PDF.
 * @param {string} divID - The ID of the div.
 * @throws {Error} If no div with the provided ID is found.
 */
export const downloadDivContentAsPDF = async (divID) => {
    const divElement = document.getElementById(divID)
    if (!divElement) {
        throw new Error('No div found with the provided ID.')
    }
    const canvas = await html2canvas(divElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: 'white',
    })
    const pdf = new jsPDF(PDF_ORIENTATION, PDF_UNIT, PDF_FORMAT)
    const imgData = canvas.toDataURL(IMAGE_FORMAT, 1.0)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = canvas.width
    const imgHeight = canvas.height

    const scaleX = pdfWidth / imgWidth
    const scaleY = pdfHeight / imgHeight
    const scale = Math.min(scaleX, scaleY)

    const newImgWidth = imgWidth * scale
    const newImgHeight = imgHeight * scale

    pdf.addImage(imgData, PDF_IMAGE_FORMAT, 0, 0, newImgWidth, newImgHeight)
    pdf.save(`${divID}_content.pdf`)
}

export const printAsPdf = (IDPareto) => {
    const chartElement = document.getElementById(IDPareto)
    const pdfOptions = {
        filename: 'pareto_chart.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'px', format: 'a2', orientation: 'landscape' },
    }
    html2pdf().set(pdfOptions).from(chartElement).save()
}
