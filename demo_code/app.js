const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('Hello from your first Express API!')
})


app.listen(8000, () => console.log('Listening on port 8000...'))