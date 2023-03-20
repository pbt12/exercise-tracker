const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username : {
        type : String,
        required : true,
        trim : true
    },
    exercise : {
        type : String,
        required : true,
        trim : true
    },
    date : {
        type : Date,
        required : true,
    },
    duration : {
        type : Number,
        required : true
    }
},{timestamps : true})

const Exercises = mongoose.model('Exercises',exerciseSchema);

module.exports = Exercises;