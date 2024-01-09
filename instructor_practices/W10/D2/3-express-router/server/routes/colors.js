const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.json('GET /colors');
});

router.get('/:name', (req, res) => {
    res.json('GET /colors/:name');
    // res.json(`GET /colors/${req.params.name}`)
});

module.exports = router;