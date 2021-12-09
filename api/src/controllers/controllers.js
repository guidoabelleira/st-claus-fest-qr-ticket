const { Ticket } = require('../db');
const { htmlToPDF } = require('./htmlToPDF');
const { confirmationMail } = require('./nodemailer')
const { runQR } = require('./qr')

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
        await runQR(newTicket);
        await htmlToPDF(newTicket);
        res.status(200).send(newTicket);
    }
    catch (error) {
        console.log("Omar, algo anda mal!")
        next(error);
    }
}

//////////////////////////////// PUT ////////////////////////////////

const completeTicket = async (req, res, next) => {
    const { id } = req.params;
    let ticket = { payment: true };
    try {

        const thisTicket = await Ticket.findOne({
            where: {
                id: id
            }
        })
        const updateTicket = await Ticket.update(ticket, {
            where: {
                id: id,
            }
        })

        confirmationMail(thisTicket.name, thisTicket.lastname, thisTicket.mail, id)
        res.status(200).send(true)
    }
    catch (error) {
        next(error)
    }
}

const checkTicket = async (req, res, next) => {
    const { id } = req.params;
    let ticket = req.body;
    try {
        const updateTicket = await Ticket.update(ticket, {
            where: {
                id: id,
            }
        })

        res.status(200).send('Entrada canjeada!')
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTickets,
    getOneTicket,
    createTicket,
    completeTicket,
    checkTicket
}