const router = require('express').Router();
let User = require('../models/signup_model');

router.route('/').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({ name, email, password });


    newUser.save()
        .then(() => res.json('User signed up successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;