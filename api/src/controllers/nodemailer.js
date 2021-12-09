const nodemailer = require("nodemailer");
const {USER_MAIL, USER_PASS} = process.env;

/// VAMOS A CAMBIAR DE POST A FUNCIONES. LUEGO UTILIZAR EN ROUTES.

const confirmationMail = async (name, lastname, mail, id) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: USER_MAIL, //
      pass: USER_PASS, //OJO ESTOS DATOS DEBEN IR EN .ENV COMO DATOS OCULTOS PORQUE SON SENSIBLES
    },
  });

  let mailOptions = {
    from: USER_MAIL,
      to: mail,
      subject: "Tu compra de entrada fue realizada con éxito!",
      html: `<div>Hola, ${name} ${lastname}! Compraste. Te esperamos en ST CLAUS</div>`,
      attachments: [{
        filename: 'Entrada_ST-CLAUS-2021.pdf',
        path: `./ticketsPDF/entrada_${id}.pdf`
      }]
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log('ERROR NODEMAILER')
      console.log(err.message);
    } else {
      console.log('Mail enviado al comprador')
    }
  });
}

module.exports = { confirmationMail }