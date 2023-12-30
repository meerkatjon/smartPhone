const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    modelName: { type: String, require: true },
    company: { type: String, require: true },
    launchDate: { type: Array, require: true },
    camera: { type: Array, require: true },
    battery: { type: Number },
    link: { type: String, require: true },


});

const Products = mongoose.model('products', productSchema);

module.exports = Products;