const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('actors endpoint');
});

router.get('/:actorId/movies/:movieId', (req, res) => {
    res.json(req.params)
});

router.get('/*', (req, res) => {
    res.send('actors catch all')
});




module.exports = router;