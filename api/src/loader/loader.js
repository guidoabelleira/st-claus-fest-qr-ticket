const { Type } = require('../db')
const types = require('../../types.json')

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

module.exports = {
    loaderTypes
}