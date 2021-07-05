'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config;
app.use(cors());
app.use(express.json());
const axios = require('axios');

const PORT = process.env.PORT || 8000;


const mongoose = require('mongoose');

mongoose.connect(`mongodb://Anas:${process.env.MONGO}@cluster0-shard-00-00.9r3ac.mongodb.net:27017,cluster0-shard-00-01.9r3ac.mongodb.net:27017,cluster0-shard-00-02.9r3ac.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-9wuyd8-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });


const { getAll, addFav, getFav, updateFav, deleteFav } = require('./controllers/pizza.controller')

app.get('/', (req, res) => { res.send('welcome to the main endpoint') })


app.get('/getall', getAll);

app.post('/addFav', addFav);
app.get('/getFav', getFav);
app.put('/updateFav', updateFav);
app.delete('/deleteFav', deleteFav);

app.listen(PORT, () => console.log("How can I help you?"));