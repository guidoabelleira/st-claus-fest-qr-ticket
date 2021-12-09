const fs = require('fs');
const pdf = require('html-pdf');
const options = { format: 'Letter' };

const htmlToPDF = async (newTicket) => {
    const html = fs.readFileSync(`./ticketsHTML/entrada_${newTicket.id}.html`, 'utf8');
    pdf.create(html, options).toFile(`./ticketsPDF/entrada_${newTicket.id}.pdf`, function(err, res) {
        if (err) return console.log(err);
        console.log('Creando PDF')
    });
}
 
module.exports = {
    htmlToPDF
}