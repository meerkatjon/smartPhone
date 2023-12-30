const router = require('express').Router();
let products = require('../models/products_model');

router.route('/').get((req, res) => {


    products.find()
        .then(products => res.json(products))
        .catch(err => res.json('Error: ' + err))
});


module.exports = router;
