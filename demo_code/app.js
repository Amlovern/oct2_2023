const express = require('express');
const app = express();

app.use(express.json());

app.get(['/test', '/status'], (req, res) => {
    res.send('Hello from your first Express API!')
})

app.get('/request', (req, res) => {
    console.log(req)
})

app.post('/create', (req, res) => {
    console.log(req.body)
})

app.get('/actors/:actorId/movies/:movieId', (req, res) => {
    res.json(req.params)
})

app.get('/search', (req, res) => {
    res.json(req.query)
})


app.listen(8000, () => console.log('Listening on port 8000...'))