const fs = require('fs');
const qrcode = require('qrcode');

const runQR = async (newTicket) => {
    const QR = await qrcode.toDataURL(newTicket.id);
    const htmlContent = `    
    <body>
    <div id='body' style="text-align: center; border: solid; border-color: #b06436; border-radius: 10px; height: 350px; width: 500px; background-image: url('/client/src/media/1\ noche.jpg'">
        <h1><span style="color: #b06436;">ENTRADA ST-CLAUS 2021</span></h1>
        <h3><span style="color: #b06436;">TE ESPERAMOS</span></h3>
        <p></p>
        <img src="${QR}"> </img>
        <blockquote>
            <p>Record&aacute; mostrar el c&oacute;digo QR en la entrada junto con tu DNI para acceder a la mejor fiesta de C&oacute;rdoba!</p>
        </blockquote>
        </div>
    </body>
    
    </html>`
    fs.writeFileSync(`./ticketsHTML/entrada_${newTicket.id}.html`, `${htmlContent}`)
    console.log('Creando QR')
}

module.exports = {
    runQR
}