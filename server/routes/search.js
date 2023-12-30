const router = require('express').Router();
let products = require('../models/products_model');

router.route('/').post((req, res) => {
    const company = req.body.company;
    const year = parseInt(req.body.year);
    const model = req.body.model;

    const battery = req.body.battery;


    //aggregrate queries
    if (year && company) {
        products.aggregate([
            { $match: { company: company, launchDate: { $elemMatch: { year: year } } } }])
            .then(results => {
                res.json(results);
                console.log(results)
            }).catch(err => res.json('Error: ' + err))
    } else if (model && company) {
        products.aggregate([
            { $match: { company: company, modelName: { $regex: new RegExp(model, "i") } } },
            { $sort: { modelName: -1 } }])
            .then(results => {
                res.json(results);
                console.log(results)
            }).catch(err => res.json('Error: ' + err))

    }
    //queries for retrieve, string expression, conditional exp
    else if (year) {
        products.find({ launchDate: { $elemMatch: { year: year } } })
            .then(results => {
                res.json(results);
                console.log(results)
            }).catch(err => res.json('Error: ' + err))
    }
    else if (model) {
        console.log('model received', model)
        products.find({ modelName: { $regex: new RegExp(model, "i") } })
            .then(results => {
                res.json(results);
                console.log(results)
            }).catch(err => res.json('Error: ' + err))

    }
    else if (company) {
        console.log("request received for company")
        products.find({ company: company })
            .then(results =>

                res.json(results))
            .catch(err => res.json('Error: ' + err))
    } else if (battery) {
        console.log("battery info received in server")
        const len = battery.length;
        if (len > 4) {
            const myArray = battery.split("-");
            let lowerLimit = parseInt(myArray[0]);
            let higherLimit = parseInt(myArray[1]);
            console.log("lower battery", lowerLimit);
            console.log("highter battery", higherLimit);
            products.find({ battery: { $lte: higherLimit, $gte: lowerLimit } })
                .then(results =>

                    res.json(results))
                .catch(err => res.json('Error: ' + err))
        }
        else {
            let lowerLimit = parseInt(battery);
            console.log("lower battery", lowerLimit);
            console.log("highter battery is zero");
            products.find({ battery: { $gt: lowerLimit } })
                .then(results =>

                    res.json(results))
                .catch(err => res.json('Error: ' + err))
        }
    }

});

module.exports = router;
