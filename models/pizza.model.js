'user strict';

const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    title: { type: String },
    image: { type: String }
});

const pizzaModel = mongoose.model('pizzas', pizzaSchema);

module.exports = { pizzaModel };
