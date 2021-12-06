const generatePDF = () => {
    const element = document.getElementById('body');

    html2pdf()
    .from(element)
    .save('Entrada ST CLAUS')
}