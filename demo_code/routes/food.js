const express = require('express');
const router = express.Router();
const { Food, FoodGroup, Foodnicity, Course } = require('../db/models');

router.get('/', async (req, res) => {
    const allFood = await Food.findAll({
        include: [{
            model: FoodGroup,
            attributes: ['id', 'name']
        }, {
            model: Foodnicity,
            attributes: ['id', 'name']
        }, {
            model: Course,
            attributes: ['id', 'name'],
            through: {
                attributes: []
            }
        }]
    })

    res.json(allFood)
});

router.get('/:foodnicity', async (req, res) => {
    const allFood = await Food.findAll({
        include: {
            model: Foodnicity,
            where: {
                name: req.params.foodnicity
            }
        }
    });

    res.json(allFood);
})






module.exports = router;