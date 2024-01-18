const express = require('express');
const app = express();
require('dotenv').config();
const foodnicityRouter = require('./routes/foodnicity');
const foodRouter = require('./routes/food');
const { Food, FoodGroup } = require('./db/models');

app.use(express.json());

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

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));