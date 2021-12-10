const router = require('express').Router()

// -------------------------- MERCADOPAGO ----------------------------------- //

// SDK de Mercado Pago
const mercadopago = require('mercadopago');
// Agrega credenciales

router.post("/", (req, res, next) => {
  // Crea un objeto de preferencia
  const products = req.body

  mercadopago.configure({
    access_token: 'APP_USR-327784668252270-111502-2ac20dc1d5088b2e30bb07d2bfef4cbf-672708481'
  });

  let preference = {
    items: [],
    back_urls: {
      success: process.env.BASE_URL + "/confirmpayment", // 
      failure: "/failure",
      pendind: "/pending",
    },
    auto_return: "all",
  };

  const addPreference = preference.items.push({
      title: `ST CLAUS - ${products.title}`,
      unit_price: parseInt(products.unit_price),
      quantity: 1
    })

  mercadopago.preferences.create(preference)
    .then(addPreference)
    .then((response) => {
      res.send(response.body.init_point)  // VER TEMA REDIRECT

    }).catch((error) => {
      next(error);
    });

})

module.exports = router;