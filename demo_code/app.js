const express = require('express');
const app = express();
require('dotenv').config();
const foodnicityRouter = require('./routes/foodnicity');

app.use(express.json());

app.use('/foodnicity', foodnicityRouter);





const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));