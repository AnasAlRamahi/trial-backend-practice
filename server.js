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

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });


const { getAll, addFav, getFav, updateFav, deleteFav } = require('./controllers/pizza.controller')

app.get('/', (req, res) => { res.send('welcome to the main endpoint') })


app.get('/getall', getAll);

app.post('/addFav', addFav);
app.get('/getFav', getFav);
app.put('/updateFav', updateFav);
app.delete('/deleteFav', deleteFav);

app.listen(PORT, () => console.log("How can I help you?"));