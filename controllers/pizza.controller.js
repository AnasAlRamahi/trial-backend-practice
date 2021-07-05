'use strict';

const { pizzaModel } = require('../models/pizza.model');
const axios = require('axios');

const getAll = async (req, res) => {
    await axios.get('https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=f8e6b1dd49aa46cfa699e46d287fc7df')
        .then(response => {
            res.send(response.data.results)
        }).catch(error => {
            res.send(error.message)
        })
}


const addFav = (req, res) => {
    const { title, image } = req.body;
    const favPizza = new pizzaModel({ title: title, image: image });
    favPizza.save();
    res.send('added successfully');
}

const getFav = (req, res) => {
    pizzaModel.find({}, (error, data) => {
        if (error) {
            res.send(error.message);
        }
        else {
            res.send(data)
        }
    })
}

const updateFav = (req, res) => {
    const { id, title, image } = req.body;
    pizzaModel.findOne({ _id: id }, (error, data) => {
        if (error) {
            res.send(error.message);
        }
        else {
            data.title = title;
            data.image = image;
            data.save().then(() => {
                pizzaModel.find({}, (error, data) => {
                    if (error) {
                        res.send(error.message);
                    }
                    else {
                        res.send(data)
                    }
                })
            }
            )
        }
    })

}

const deleteFav = (req, res) => {
    const { id } = req.query
    pizzaModel.deleteOne({ _id: id }, (error, data) => {
        pizzaModel.find({}, (error, data) => {
            if (error) {
                res.send(error.message);
            }
            else {
                res.send(data)
            }
        })
    })
}


module.exports = { getAll, addFav, getFav, updateFav, deleteFav }