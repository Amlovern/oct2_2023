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

router.put('/update/:id', async (req, res) => {
    const { name } = req.body;
    const foodnicityId = req.params.id;

    const foodnicity = await Foodnicity.findByPk(foodnicityId);

    // if (name !== undefined) {
    //     foodnicity.name = name;
    // }
    foodnicity.name = name || foodnicity.name
    await foodnicity.save();

    res.json(foodnicity);
});

router.delete('/:id', async (req, res) => {
    const foodnicityId = req.params.id;
    const foodnicity = await Foodnicity.findByPk(foodnicityId);

    await foodnicity.destroy();

    res.json(foodnicity);
});


module.exports = router;