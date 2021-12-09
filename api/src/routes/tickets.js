const router = require('express').Router();
const { getAllTickets, getOneTicket, createTicket, completeTicket, checkTicket } = require('../controllers/controllers')
const { Ticket, Type } = require('../db'); // ???
const { confirmationMail } = require('../controllers/nodemailer')

router.get("/", async (req, res, next) => {
        try {
            const allTickets = await getAllTickets();
            allTickets.length ? res.status(200).send(allTickets) : res.send('No se vendió nada aún')
        } catch (error) {
            next(error);
        }
});

router.get('/:id', getOneTicket)

router.post('/', createTicket)

router.put('/:id', completeTicket)
router.put('/check/:id', checkTicket)

module.exports = router;