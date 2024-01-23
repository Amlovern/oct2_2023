const express = require('express');
const app = express();
require('dotenv').config();
const { Op } = require('sequelize');
const foodnicityRouter = require('./routes/foodnicity');
const foodRouter = require('./routes/food');
const { Food, FoodGroup } = require('./db/models');

app.use(express.json());

app.use('/styling', express.static('assets/css'));

app.use('/foodnicity', foodnicityRouter);
app.use('/food', foodRouter);

app.get('/associations', async (req, res) => {
    const food = await Food.findByPk(1);
    // const foodGroup = await food.getFoodGroup();
    // const foodGroup = await FoodGroup.findByPk(1);
    // const newFood = await foodGroup.createFood({
    //     name: 'tater tots',
    //     temp: 'hot',
    //     kcal: 531,
    //     price: 5.22,
    //     foodnicityId: 2,
    //     healthy: false
    // });
    // const food = await foodGroup.getFood();
    const newCourseFood = await food.addCourse(3);

    res.json({
        food,
        // newFood,
        // foodGroup,
        newCourseFood
    })
});

app.get('/aggregates', async (req, res) => {
    const minPrice = await Food.min('price');
    const maxPrice = await Food.max('price');
    // const numFoods = await Food.count();
    const allFoods = await Food.findAll();
    const numFoods = allFoods.length;
    const totalPrice = await Food.sum('price');
    const avgPrice = totalPrice / numFoods;
    const healthyTotal = await Food.sum('price', {
        where: {
            healthy: true
        }
    });
    let priceyFood = await Food.findOne({
        where: {
            price: maxPrice
        }
    });

    priceyFood = priceyFood.toJSON();

    priceyFood.minPrice = minPrice;
    priceyFood.maxPrice = maxPrice;
    priceyFood.numFoods = numFoods;
    priceyFood.totalPrice = totalPrice;
    priceyFood.avgPrice = avgPrice;
    priceyFood.healthyTotal = healthyTotal;

    res.json({
        // minPrice,
        // maxPrice,
        // numFoods,
        // totalPrice,
        // avgPrice,
        // healthyTotal,
        priceyFood
    })
})

app.get('/pagination', async (req, res) => {
    let { size, page } = req.query;
    let paginationObj = {};

    if (!page) page = 1;
    if (!size) size = 5;

    paginationObj.limit = size;
    paginationObj.offset = size * (page - 1);
    
    if (parseInt(size) <= 0 || page <= 0) {
        delete paginationObj.limit;
        delete paginationObj.offset;
        // paginationObj = {};
    };

    const food = await Food.findAll({
      attributes: ['name', 'id'],
      order: [['id'], ['name']],
      ...paginationObj
    });
    
    res.json(food);
});

app.get('/search', async (req, res) => {
    const { name, maxPrice, foodGroup } = req.query;
    const queryObj = {
        where: {},
        include: []
    };

    // if (name) {
    //     queryObj.where = {
    //         name: {
    //             [Op.substring]: name
    //         }
    //     }
    // };

    if (name) {
        queryObj.where.name = {
            [Op.substring]: name
        }
    };

    if (maxPrice) {
        queryObj.where.price = {
                [Op.lte]: maxPrice
            }
    };

    if (foodGroup) {
        queryObj.include.push({
            model: FoodGroup,
            where: {
                name: foodGroup
            }
        })
    };

    const food = await Food.findAll({...queryObj});

    res.json(food);
})

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));