const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        minlength : 3,
        trim : true
    }
},{timestamps : true})

const Users = mongoose.model('Users',userSchema);
module.exports = Users;