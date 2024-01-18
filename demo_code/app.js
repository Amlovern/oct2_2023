const express = require('express');
const app = express();
require('dotenv').config();
const foodnicityRouter = require('./routes/foodnicity');
const foodRouter = require('./routes/food');

app.use(express.json());

app.use('/foodnicity', foodnicityRouter);
app.use('/food', foodRouter);





const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));