const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;
const url = process.env.ATLAS_URI;
console.log(url);
app.use(express.json());
app.use(cors());

mongoose.connect(url,{});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('Mongodb connection established');
})

const Users = require('./routes/users');
const Exercises = require('./routes/exercises');

app.use('/users',Users);
app.use('/exercises',Exercises);

app.listen(5000,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})