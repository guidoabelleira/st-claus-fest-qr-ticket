const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const ticketsRoute = require('./tickets')
const typesRoute = require('./types')

router.use('/tickets', ticketsRoute)
router.use('/types', typesRoute)

module.exports = router;
