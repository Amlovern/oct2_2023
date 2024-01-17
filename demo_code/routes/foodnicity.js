const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Foodnicity } = require('../db/models');

router.get('/', async (req, res) => {
    const foodnicities = await Foodnicity.findAll({
        attributes: ['id', 'name'],
        order: [['name']]
    });

    res.json(foodnicities);
});

router.get('/search', async (req, res) => {
    const name = req.body.name;
    const foodnicity = await Foodnicity.findAll({
        where: {
            name: {
                [Op.substring]: name
            }
        }
    })

    res.json(foodnicity);
});

router.get('/:id', async (req, res) => {
    const foodnicity = await Foodnicity.findByPk(req.params.id, {
        attributes: ['id', 'name']
    });

    res.json(foodnicity);
});

router.post('/build', async (req, res) => {
    const { name } = req.body;

    const newFoodnicity = Foodnicity.build({name});
    await newFoodnicity.validate();
    await newFoodnicity.save();

    res.json(newFoodnicity);
});

router.post('/create', async (req, res) => {
    const { name } = req.body;

    const newFoodnicity = await Foodnicity.create({name});

    res.json(newFoodnicity)
});


module.exports = router;