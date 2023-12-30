const router = require('express').Router();
let User = require('../models/signup_model');

router.route('/').post((req, res) => {
    const reqEmail = req.body.email;
    const password = req.body.password;
    User.findOne({ email: reqEmail })
        .then(user => {
            console.log("user" + user)
            if (user) {
                if (user.password === password) {
                    console.log(user)
                    res.json("success")
                } else {
                    res.json('Password is incorrect.')
                }
            } else {
                res.json("User is not registered. Please signup!")
            }
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;