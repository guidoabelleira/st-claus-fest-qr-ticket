const router = require('express').Router();
const { getAllTypes } = require('../controllers/controllers')
const { Type } = require('../db');

router.get("/", async (req, res, next) => {
    try {
        const allTypes = await getAllTypes();
        allTypes ? res.status(200).json(allTypes) : res.json({ data: { error: 'No hay tipos de entradas aún' } })
    } catch (error) {
        next(error);
    }
});

module.exports = router;