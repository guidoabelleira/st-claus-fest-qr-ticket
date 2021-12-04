const { Ticket } = require('../db');
const { confirmationMail } = require('./nodemailer')

//////////////////////////////// GET ////////////////////////////////

const getAllTickets = async () => {
    return await Ticket.findAll();
};

const getOneTicket = async (req, res, next) => {
    const { id } = req.params;
    try {
        const allTickets = await getAllTickets()
        if (id) {
            const getOneTicket = await allTickets.filter((el) => id === el.id)
            getOneTicket.length ? res.status(200).send(getOneTicket) : res.status(404).send('Entrada inválida')
        }
    }
    catch (error) {
        next(error);
    }
}

//////////////////////////////// POST ////////////////////////////////

const createTicket = async (req, res, next) => {
    const {
        name,
        lastname,
        dni,
        mail,
        ticketType,
        telephone,
        price
    } = req.body

    try {
        const newTicket = await Ticket.create({
            name,
            lastname,
            dni,
            mail,
            ticketType,
            telephone,
            price
        });
        confirmationMail(mail, name, lastname)
        res.status(200).send(newTicket)
    }
    catch (error) {
        console.log("Omar, algo anda mal!")
        next(error);
    }
}

module.exports = {
    getAllTickets,
    getOneTicket,
    createTicket
}