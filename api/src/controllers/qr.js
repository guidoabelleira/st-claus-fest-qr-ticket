const fs = require('fs');
const qrcode = require('qrcode');

const runQR = async (newTicket) => {
    const QR = await qrcode.toDataURL(newTicket.id);
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'></script>
        <script src="script.js"></script>
    </head>
    
    <body>
        <div id='body'>
            <p>Hola ${newTicket.name} ${newTicket.lastname}</p>
            <p></p>
            <p>Este es el ticket ${newTicket.id}</p>
            <hr>
            </hr>
            <img src="${QR}"> </img>
        </div>
        <button onclick="generatePDF()">Descargar entrada</button>
    </body>
    
    </html>`
    fs.writeFileSync(`./ticketsHTML/entrada_${newTicket.id}.html`, `${htmlContent}`)
    console.log('Creando QR')
}

module.exports = {
    runQR
}