const {Ticket, Type} = require('../db');

const getAllTickets = async () => {
    return await Ticket.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
};

const getAllTypes = async () => {
    return await Type.findAll()
}

module.exports = {
    getAllTickets,
    getAllTypes
}