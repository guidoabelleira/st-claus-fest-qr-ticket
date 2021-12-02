const nodemailer = require("nodemailer");
const {USER_MAIL, USER_PASS} = process.env;

/// VAMOS A CAMBIAR DE POST A FUNCIONES. LUEGO UTILIZAR EN ROUTES.

const confirmationMail = () => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: USER_MAIL, //
      pass: USER_PASS, //OJO ESTOS DATOS DEBEN IR EN .ENV COMO DATOS OCULTOS PORQUE SON SENSIBLES
    },
  });

  let mailOptions = {
    from: USER_MAIL,
      to: req.body.user.email,
      subject: "Tu compra de entrada fue realizada con éxito!",
      html: `<div>Hola. Compraste. Te esperamos en ST CLAUS</div>`
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send('Mail enviado correctamente sin errores')
    }
  });

  res.send('Mail enviado!')
}

module.exports = { confirmationMail }