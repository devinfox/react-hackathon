require('./../config/database');
const sample = require('./sample-data');
//import mongoose models
console.log(sample)
const Product = require('./../models/product');

console.log(Product)

// destroy all data in database
const seeds = Product.remove({})

seeds.then(() => {
    return Product.create(sample)
})

.then((product) => {
    console.log(product);
    require('mongoose').connection.close();
    process.exit();
})