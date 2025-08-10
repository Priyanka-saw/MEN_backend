const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    // gender: {
    //     type: String,
    //     enum: ['male', 'female']
    // }
})

const userModel = mongoose.model('user', UserSchema)

module.exports = userModel