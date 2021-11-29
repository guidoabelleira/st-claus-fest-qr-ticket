const router = require('express').Router();
const { getAllTickets } = require('../controllers/controllers')
const { Ticket, Type } = require('../db'); // ???

//////////////////////////////// GET ////////////////////////////////

router.get("/", async (req, res, next) => {
    res.json('Get de todos los tickets vendidos')
/*     try {
        const allTickets = await getAllTickets();
        allTickets ? res.status(200).json(allTickets) : res.json({ data: { error: 'No hay entradas vendidas aún' } })
    } catch (error) {
        next(error);
    } */
});

router.get('/:id', async (req, res, next) => {
    res.json('Get de un ticket particular')
/*     const { id } = req.params;
    try {
        const allTickets = await getAllTickets();
        if (id) {
            let oneTicket = await allTickets.filter(el => el.id === id);
            oneTicket ? res.status(200).json(oneTicket) : res.json({ data: { error: 'Entrada inválida' } })
        }
    } catch (error) {
        next(error);
    } */
})

//////////////////////////////// POST ////////////////////////////////

router.post('/', (req, res, next) => {

})

module.exports = router;