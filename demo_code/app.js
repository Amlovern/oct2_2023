const express = require('express');
const app = express();

app.use(express.json());

// Create a middleware to print the path of the request
// Maybe use req.url?
const printPath = (req, res, next) => {
    console.log(`path: ${req.url}`);
    console.log(req.originalUrl)
    next();
};

// Create a middleware to validate user input
const checkUserInput = (req, res, next) => {
    if (req.body.stuff) {
        // console.log('inside if block')
        return next();
    }
    // console.log('outside if block')
    res.status(400).send('Please include a stuff property.')
};

app.use((req, res, next) => {
    console.log('error test');
    const error = 'There was an error :(';
    next(error);
})

app.use('/actors', printPath);

app.get(['/test', '/status'], [printPath, checkUserInput], (_req, res) => {
    res.send('Hello from your first Express API!')
})

app.get('/request', (req, res) => {
    console.log(req)
})

app.post('/create', checkUserInput, (req, res) => {
    res.json(req.body)
})

app.get('/actors', (err, req, res, next) => {
    console.log('inside /actors endpoint')
    res.send('actors endpoint')
})

app.get('/actors/:actorId/movies/:movieId', (req, res) => {
    res.json(req.params)
})

app.get('/actors/*', (req, res) => {
    res.send('actors catch all')
})

app.get('/search', (req, res) => {
    res.json(req.query)
})

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.send(err)
});


app.listen(8000, () => console.log('Listening on port 8000...'))