const fs = require('fs');
const qrcode = require('qrcode');

const urlBase = 'http://localhost:3000/entradas/'

/* const tickets = [
    {id: 1}, {id: 2}, {id: 15}
] */

const run = async (ticket) => {
        const QR = await qrcode.toDataURL(urlBase + ticket);
        const htmlContent = `<div> <p>Hola Guidoneta</p>
        <img src="${QR}"> </img>
        </div>`
        fs.writeFileSync('./index.html', `${htmlContent}`)
}

/* const generateQR = async (ticket) => {
    try {

    }
} */

run(15);