const { Type, Admin } = require('../db')
const types = require('../../types.json')
const admin = require('../../admin.json')

const loaderTypes = async () => {
    try {
        const modelTypes = types.map((el) => {
            return {
                name: el.name,
                price: el.price
            };
        });
        modelTypes.forEach(async (el) => {
            const creatingTypes = await Type.findOrCreate({
                where: {
                    name: el.name,
                    price: el.price
                }
            })
        })
        console.log('Tipos de entradas creadas, mi rey ✨👌💲')
    }
    catch(error) {
        console.log('No creaste bien. Algo pasó 🤬🥺')
    }
}

const loaderAdmin = async () => {
    try {
        Admin.create({
            name: admin.name,
            email: admin.email,
            isAdmin: admin.isAdmin,
            password: admin.password,
        })
        console.log("Admin creado con éxito! 😁✨")
    }
    catch (error) {
        console.log("Error en la carga del admin 😓😱")
    }
}

module.exports = {
    loaderTypes,
    loaderAdmin
}